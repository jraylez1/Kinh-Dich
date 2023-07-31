(function () {
    "use strict"

    function Module(container, props = {}) {
        this.$container = container;
        this.props = {
            key: null,
            name: null,
            controllerName: null,
            baseUrl: "/AdminCP/",
            urls: {
                search: null
            },
            onTableDraw: null,
            onTableInit: null,
            onSearchSubmit: null,
            onInitCompleted: null
        }

        Object.keys(props).forEach(key => this.props[key
            ] = props[key]);
        if (!this.props.controllerName) {
            throw "'controllerName' is required!!!";
        }
        
        if (!this.props.key)
            this.props.key =  this.props.controllerName;
        
        this.init();
    }
    
    Module.prototype.init = function () {
        this.fillPageRecords();
        this.initDataTable();
        if (this.props.onInitCompleted) {
            if (typeof this.props.onInitCompleted === "string") {
                eval(`${this.props.onInitCompleted}(this)`);
                return;
            }
            
            this.props.onInitCompleted(this)
        }
            
    }
    
    // Private methods
    Module.prototype.getRecordsInPage = function () {
        const value = window.localStorage.getItem("recordsPerPage_" + this.props.key);
        if (strings.isNullOrEmpty(value) || isNaN(value))
            return 10;

        return parseInt(value);
    }
    
    Module.prototype.fillPageRecords = function () {
        const $select = this.$container.find('.recordsPerPage');
        if ($select.length === 0)
            return;

        let self = this;
        let items = [10, 20, 50, 100];
        let html = '';
        for (let item in items){
            let rows = items[item];
            html += `<option value="${rows}">${strings.format(languages.get("{0} records"), rows)}</option>`;
        }

        $select.html(html).val(this.getRecordsInPage()).trigger('change');
        $select.change(function () {
            window.localStorage.setItem("recordsPerPage_" + self.props.key, this.value);
            if (!self.$dataTable)
                return;

            self.$dataTable.page.len(this.value);
            self.$dataTable.draw();
        })
    }

    Module.prototype.reloadDataTable = function () {
        if (this.props.reloadDataTable) {
            this.props.reloadDataTable(this);
            return;
        }

        if (this.$dataTable)
            this.$dataTable.ajax.reload(null, false);
    }
    
    Module.prototype.getActionUrl = function (action, params) {
        let url = this.props.baseUrl + this.props.controllerName + "/" + action;
        if (params) {
            const data = [];
            Object.keys(params).forEach(key => data.push(`${key}=${encodeURI(params[key])}`));
            url += "?" + data.join('&');            
        }
        
        return url;
    }
    
    Module.prototype.getSearchUrl = function () {
        let url = this.props.urls.search || this.getActionUrl("Search");
        const $formSearch = this.$container.find(".search-box form");
        if ($formSearch.length > 0) {
            if (url.indexOf('?') === -1)
                url += "?";
            else
                url += "&";
            
            this.searchData = $formSearch.serialize();
            url += this.searchData;
        }
        
        return url;
    }

    Module.prototype.initDataTable = function () {
        if (this.props.initDataTable) {
            this.props.initDataTable(this);
            return;
        }

        let $table = this.$container.find(".tbl-data");
        if ($table.length < 1)
            return;

        let tableId = $table.attr("id");
        if (strings.isNullOrEmpty(tableId))
        {
            tableId = "table_" + new Date().getTime();
            $table.attr("id", tableId);
        }

        $table = this.$container.find("#" + tableId);

        let self = this;
        let options = {
            processing: true,
            serverSide: true,
            pageLength: this.getRecordsInPage(),
            lengthChange: false,
            searching: false,
            ajax: {
                url: this.getSearchUrl(),
                type: 'POST',
                dataSrc: 'data'
            },
            responsive: false,
            autoWidth: false,
            language: languages.get("dataTable"),
            drawCallback: function () {
                let $table = $(this);
                $table.find(".selector-all").prop("checked", false);
                controls.init($table);

                if (self.props.onTableDraw) {
                    if (typeof self.props.onTableDraw === "string") {
                        eval(`${self.props.onTableDraw}(self.$dataTable)`);
                        return;
                    }
                    
                    self.props.onTableDraw();
                }                    
            },
            initComplete: function () {
                let $table = $(this);
                let $checkbox;
                let $tableScroll = $table.closest('.dataTables_wrapper').find(".dataTables_scroll");
                if ($tableScroll.length === 0) {
                    $checkbox = $table.find('.selector-all');
                    if ($checkbox.length > 0)
                        $checkbox.on("change", function () {
                            $table.find(".selector").prop('checked', $(this).is(":checked") === true);
                        })
                } else {
                    $checkbox = $tableScroll.find('.selector-all');
                    if ($checkbox.length > 0)
                        $checkbox.on("change", function () {
                            $tableScroll.find(".selector").prop('checked', $(this).is(":checked") === true);
                        })
                }

                if (self.props.onTableInit)
                    self.props.onTableInit();
            }
        }

        let sortBy = $table.data('order-column');
        let sortDir = $table.data('order-dir');
        if (strings.isNullOrEmpty(sortDir))
            sortDir = 'asc';

        if (!strings.isNullOrEmpty(sortBy)) {
            let $column = $table.find('thead [data-name="' + sortBy + '"]');
            if ($column.length > 0)
                options.order = [[$column.index(), sortDir]];
        }

        if (!options.order)
            options.order = [[$table.find('thead > tr > *:not([data-orderable="false"])').index(), sortDir]];
        
        this.$dataTable = $table.DataTable(options);
        $table.on('xhr.dt', function (e, settings, json, xhr) {
            if (xhr.status !== 200) {
                toasts.error(languages.get("Connect to server failed!"));
                return;
            }
            
            if (strings.isNullOrEmpty(json.message))
                return;

            toasts.error(json.message);
        });

        let $form = this.$container.find(".search-box form");
        if ($form.length > 0) {
            $form.submit(function () {
                self.$dataTable.ajax.url(self.getSearchUrl());
                self.reloadDataTable();

                if (self.props.onSearchSubmit)
                    self.props.onSearchSubmit();

                return false;
            })
        }
    }
    
    Module.prototype.exec = function (actionName, options = {
        openType: "redirect",
        params: {}
    }) {
        if (options.openType === "redirect")
        {
            location.href = this.getActionUrl(actionName, options.params);
            return;
        }
        
        this.$modal = dialogs.load({
            url: this.getActionUrl(actionName, options.params),
            title: options.title,
            size: options.size,
            type: options.type,
            buttons: options.buttons,
            onButtonClick: options.onButtonClick
        })
    }
    
    Module.prototype.execRedirect = function (actionName, options) {
        options.openType = "redirect";
        this.exec(actionName, options);
    }
    
    Module.prototype.execDelete = async function (id, options = {
        actionName: "Delete",
        success: null
    }) {
        let data = [];
        if (id)
            data.push("ids=" + id);
        else
        {
            const $checkBoxes = this.$container.find(".selector:checked");
            for (let index = 0; index < $checkBoxes.length; index ++) 
                data.push("ids=" + $checkBoxes[index].value);
        }
        
        if (data.length === 0) {
            toasts.error("Please select one or more item (s) to delete");
            return;
        }
        
        if (!await dialogs.confirm("Do you sure to delete selected item (s)")) {
            return;
        }
        
        const self = this;
        $.post(this.getActionUrl(options.actionName || "Delete"), data.join('&'), "json").done(function (response) {
            if (response.error) {
                dialogs.alert(response.message, "error");
                return;
            }

            toasts.success(response.message);
            if (options.success)
                options.success();
            else
            {
                self.reloadDataTable();
            }
        }).fail(function () {
            dialogs.alert(languages["Connect to server failed!"], "error");
        })
        
    }
    
    Module.prototype.execAdd = function (options = {params: null, actionName: "Add"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "Add", options.params),
            title: options.title || strings.format(languages.get("Add new {0}"), this.props.name),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            buttons: [{
                text: languages.get("Save"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }
    
    Module.prototype.onAddSubmitSuccess = function (form, response) {
        if (response.error)
            return;

        dialogs.hideModal(form);        
        this.reloadDataTable();
    }

    Module.prototype.execEdit = function (id, options = {params: null, actionName: "Edit"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "Edit", {...options.params, id}),
            title: options.title || strings.format(languages.get("Edit {0}"), this.props.name),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }

    Module.prototype.onEditSubmitSuccess = function (form, response) {
        if (response.error)
            return;

        dialogs.hideModal(form);
        this.reloadDataTable();
    }

    Module.prototype.execDetail = function (id, options = {params: null, actionName: "Detail"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "Detail", {...options.params, id}),
            title: options.title || strings.format(languages.get("Details of {0}"), this.props.name),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: options.buttons || [{
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }

    Module.prototype.execApprove = function (id,isApproved, options = {params: null, actionName: "ChangeStatus"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "ChangeStatus", {...options.params, id,isApproved}),
            title: options.title,
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }
    
    Module.prototype.execPrint = function (id, options = {params: null, actionName: "Print"}) {
        if (!options.params)
            options.params = {}

        options.params.id = id;        
        $.get(this.getActionUrl(options.actionName || "Print"), options.params, "json").done(function (response, data, xhr) {
            if (xhr.getResponseHeader("content-type").indexOf("json") > -1) {
                if (response.error) {
                    dialogs.alert(response.message, "error");
                    return;
                }

                toasts.success(response.message);
                return;
            }

            var mywindow = window.open('', 'PRINT');

            mywindow.document.write(response);
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            mywindow.close();
            
        }).fail(function () {
            dialogs.alert(languages["Connect to server failed!"], "error");
        })
    }

    Module.prototype.execConcurrently = function (id, options = {params: null, actionName: "Concurrently"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "Concurrently", {...options.params, id}),
            title: options.title || languages.get("Concurrently department"),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }

    Module.prototype.execContact = function (options = {params: null, actionName: "Contact"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "Contact", {...options.params, id}),
            title: options.title || languages.get("Contact person"),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }

    Module.prototype.execContactPerson = function (id, options = {params: null, actionName: "ContactPerson"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "ContactPerson", {...options.params, id}),
            title: options.title || languages.get("Contact person"),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }

    Module.prototype.execRawCustomer = function (options = {params: null, actionName: "AddRawCustomer"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "AddRawCustomer", options.params),
            title: options.title || languages.get("Raw customer"),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }

    Module.prototype.execEditRawCustomer = function (id, options = {params: null, actionName: "EditRawCustomer"}) {
        this.dialog = dialogs.load({
            url: this.getActionUrl(options.actionName || "EditRawCustomer", {...options.params, id}),
            title: options.title || strings.format(languages.get("Edit {0}"), this.props.name),
            size: options.size || dialogs.constants.sizes.none,
            onCreated: options.onCreated,
            onDispose: options.onDispose,
            buttons: [{
                text: languages.get("Save changes"),
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13
            }, {
                text: languages.get("Close"),
                close: true
            }],
            onButtonClick: options.onButtonClick
        });
    }
    
    Module.prototype.destroy = function () {
        if (this.$dataTable)
            this.$dataTable.destroy();
    }
    
    $.fn.createModule = function (options) {
        return new Module(this, options);
    }
}(jQuery))