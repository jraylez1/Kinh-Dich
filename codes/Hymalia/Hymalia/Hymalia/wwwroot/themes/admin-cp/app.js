const $body = $("body");
const $document = $(document);

const dialogs = {
    constants: {
        types: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            info: "bg-info",
            warn: "bg-warning",
            warning: "bg-warning",
            danger: "bg-danger",
            error: "bg-danger"
        },
        sizes: {
            none: "",
            small: "modal-sm",
            large: "modal-lg",
            extra: "modal-xl",
            extraPlus: "modal-xxl"
        }
    },
    loading: {
        render: () => {
            $body.append(`<div class="loading-container d-none justify-content-center align-items-center">
                <div class="loading-dialog text-center" id="loadingDialog">
                    <div class="loading-icon"><i class="fas fa-spinner fa-pulse"></i></div>
                    <div class="loading-text">${languages["Data loading..."]}</div>
                </div>
            </div>`);
        },
        show: () => $(".loading-container").removeClass("d-none").addClass("d-flex"),
        dismiss: () => $(".loading-container").removeClass("d-flex").addClass("d-none"),
    },
    confirm: async function (message, title, icon) {
        const result = await Swal.fire({
            title: languages.get(title, "Confirm title"),
            icon: icon || 'question',
            html: languages.get(message),
            heightAuto: false,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: languages["Accept"],
            cancelButtonText: languages["Cancel"],
        });
        
        return result.isConfirmed;
    },
    alert: async (message, icon, title, options) => {
        const defaultOptions = {
            title: title || "Himalaya Thông báo",
            icon: icon || 'error',
            html: message,
            heightAuto: false,
            showCloseButton: true,
            closeButtonText: "Đồng ý",
        };

        if (options)
            Object.keys(options).forEach(key => defaultOptions[key] = options[key]);

        return await Swal.fire(defaultOptions)
    },
    getBoostrapModalOptions: (options = {}) => {
        const modalOptions = {
            headerClass: options.type ? options.type : "",
            modalDialogClass: options.size ? options.size : "",
            title: options.title,
            body: options.body,
            onCreate: modal => {
                // Register button click event
                $(modal.element).on("click").on("click", "button.btn-footer[data-index]", function (event) {
                    event.preventDefault();
                    
                    let index = parseInt($(this).data('index'));
                    if (options.onButtonClick)
                        options.onButtonClick(modal, index);

                    if (options.buttons[index].onClick)
                        options.buttons[index].onClick(modal);
                })
                
                if (options.onCreate)
                    options.onCreate(modal);
            },
            onCreated: modal => {
                controls.init(modal.element);
                
                const $modal = $(modal.element);
                $modal.on("keydown", 'input[type="text"], input[type="password"], input[type="number"], input[type="tel"], input[type="email"]', e => {
                    $modal.find('.modal-footer button[data-hotkey="' + e.keyCode + '"]').click();
                });

                $modal.on("click", `.modal-footer button:not([type]), .modal-footer button[type="submit"]`, () => {
                    $modal.find("form").submit();
                });
                
                if (options.onCreated)
                    options.onCreated(modal);
            },
            onHide: modal => {
                if (options.onHide) 
                    options.onHide(modal);
            },
            onShown: modal => {
                if (options.onShown)
                    options.onShown(modal);
            },
            onDispose : modal => {
                controls.init(modal.element);
                
                const $modal = $(modal.element);
                // Destroy events
                $modal.off("keydown");
                $modal.find("button.btn-footer").off("click");
                
                if (options.onDispose )
                    options.onDispose (modal);
            },
            footer: ""
        };
        
        if (options.buttons) {
            for (let buttonIndex = 0; buttonIndex < options.buttons.length; buttonIndex++) {
                let button = options.buttons[buttonIndex];
                let btnClass = button.cssClass ? button.cssClass : 'btn-default';
                let dataClose = button.close ? 'data-dismiss="modal"' : ''
                let hotkey = button.hotkey ? `data-hotkey="${button.hotkey}"` : "";
                let attributes = "";
                if (button.attributes)
                {
                    const arrAttributes = [];
                    Object.keys(button.attributes).forEach(key => arrAttributes.push(`${key}="${button.attributes[key]}"`));
                    attributes = arrAttributes.join(' ');
                }
                
                if (button.type === "href")
                    modalOptions.footer += `<a data-index="${buttonIndex}" class="btn btn-footer ${btnClass}" ${dataClose} ${hotkey} href="${button.data}" ${attributes}>${button.text}</a>`;
                else
                    modalOptions.footer += `<button type="${button.type || "button"}" data-index="${buttonIndex}" class="btn btn-footer ${btnClass}" ${dataClose} ${hotkey} ${attributes}>${button.text}</button>`;
            }
        }
        
        return modalOptions;
    },
    show: options => $.showModal(dialogs.getBoostrapModalOptions(options)),
    load: options => {
        if (strings.isNullOrEmpty(options.url)) {
            toasts.error(languages.get("{0} is required"), "options.url");
        }

        let modal;
        $.ajax({
            async: false,
            url: options.url,
            data: options.data ?? {},
            contentType: "text/html; charset=UTF-8"
        }).done(function (response, result, xhr) {
            let json = xhr.responseJSON;
            if (json) {
                if (json.error)
                    toasts.error(json.message);
                else
                    toasts.success(json.message);

                return;
            }
            
            options.body = response;
            modal = dialogs.show(options);
        }).fail(function () {
            dialogs.alert("Connect to server failed!");
        });

        return modal;
    },
    hideModal: element => $(element).closest(".modal").modal("hide")
}

const toasts = {
    show: (message, type) => toastr[type || "info"](languages.get(message)),
    info: message => toasts.show(message, "info"),
    warning: message => toasts.show(message, "warning"),
    error: message => toasts.show(message, "error"),
    success: message => toasts.show(message, "success")
}

const strings = {
    empty: "",
    isNullOrUndefined: (str) => !str,
    isNullOrEmpty: (str) => strings.isNullOrUndefined(str) || str.trim().length === 0,
    format: function () {
        let args = arguments;
        let argsSize = args === null ? 0 : args.length;
        if (argsSize <= 0)
            return "";

        if (argsSize === 1)
            return args[0];

        return args[0].replace(/{(\d+)}/g, function (match, number) {
            let index = parseInt(match.replace("{", strings.empty).replace("}", strings.empty)) + 1;
            return typeof args[index] == "undefined" ? strings.empty : args[index];
        });
    }
}

const converter = {
    toString: (data) => {
        if (typeof data === "number")
            return new Intl.NumberFormat().format(data);

        return data;
    },
    toFloat: (data) => {
        if (!data || strings.isNullOrEmpty(data) || isNaN(data))
            return 0;
        
        return parseFloat(data);
    },
    toInt: (data) => {
        if (!data || strings.isNullOrEmpty(data) || isNaN(data))
            return 0;

        return parseInt(data);
    }
}

const forms = {
    cssClasses: {
      AJAX_SUBMITTING: "ajax_submitting"  
    },
    register: function (element) {
        if (element.hasAttribute("manual"))
            return;
        
        return forms.ajaxSubmit(element);
    },
    ajaxSubmit: function (element) {
        const $form = $(element);
        if ($form.hasClass(forms.cssClasses.AJAX_SUBMITTING))
            return;

        $form.addClass(forms.cssClasses.AJAX_SUBMITTING);                      
        let $container = $form.closest('.modal');
        if ($container.length === 0) {
            $container = $form;
        }
        
        const $buttons = $container.find('button, input[type="button"], input[type="submit"]').prop("disabled", true);
        $form.ajaxSubmit({
            success: function (response) {
                $form.removeClass(forms.cssClasses.AJAX_SUBMITTING);
                $buttons.prop("disabled", false);                

                if (response.error) {
                    toasts.error(response.message);
                    if (response.code === 400) {
                        let errors = response.data;
                        if(errors !== null){
                            errors.each(function () {
                                let $input = $form.find(`[name="${this.name}"]`);
                                if ($input.length > 0){
                                    $input.val(strings.empty);
                                    $input.focus();
                                }
                            })
                        }
                    }
                }
                else
                    toasts.success(response.message);

                let fn = $form.attr("onSubmitSuccess");
                if (strings.isNullOrEmpty(fn))
                    return;

                eval(`${fn}(element, response)`);
            },
            error: function (){
                dialogs.alert(languages["Connect to server failed!"], "error");
                $form.removeClass(forms.cssClasses.AJAX_SUBMITTING);                
                $buttons.prop("disabled", false);
                
                let fn = $form.attr("onSubmitFailed");
                if (strings.isNullOrEmpty(fn))
                    return;

                eval(`${fn}(element)`);
            }
        });
        return false;
    }
}

const controls = {
    getContainer: (element) => {
        if (element)
            return $(element);
        
        return $body;
    },
    init: (container) => {
        container = controls.getContainer(container);
        const $forms = container.find("form");
        if ($.validator && $forms.length > 0) {
            for (let i = 0; i < $forms.length; i++) {
                $.validator.unobtrusive.parse($forms[i]);
            }                
        }

        if ($.fn.DataTable) {
            container.find('table:not(.no-style, .styled)').each(function () {
                const $table = $(this);
                $table.addClass("styled");

                let options = {
                    lengthChange: false,
                    searching: false,
                    responsive: true,
                    autoWidth: false,
                    language: languages.get("dataTable"),
                    drawCallback: function () {
                        controls.init($(this));
                    }
                };

                $table.DataTable(options);
            });
        }
        
        if ($.fn.select2) {
            container.find('select:not([data-tree]):not(.styled, .no-style)').each(function () {
                const $select = $(this);
                $select.addClass("styled");
                
                let options = {
                    minimumInputLength: 0,
                    width: '100%',
                    dropdownParent: $select.parent(),
                    placeholder:  $select.data('placeholder') || '',
                    allowClear: $select.data('allow-clear') || false,
                    theme: 'bootstrap4'
                }
                
                let templateResult = $select.data("templateresult");
                if (typeof templateResult === "string" && typeof window[templateResult] === "function"){
                    options.templateResult = window[templateResult];
                }
                
                let templateSelection = $select.data("templateselection");
                if (typeof templateSelection === "string" && typeof window[templateSelection] === "function"){
                    options.templateSelection = window[templateSelection];
                }
                
                

                let dataUrl = $select.data("url");
                if (!strings.isNullOrEmpty(dataUrl)) {
                    options.ajax = {
                        delay: 500,
                        url: function () {
                            return typeof window[dataUrl] === "function" ? window[dataUrl]($select) : dataUrl;
                        },
                        dataType: 'json',
                        data: function (params) {
                            return {
                                q: params.term,
                                page: params.page
                            };
                        },
                        processResults: function (data, params) {
                            params.page = params.page || 1;

                            return {
                                results: data.items,
                                pagination: {
                                    more: (params.page * 10) < data.total_count
                                }
                            };
                        }
                    };
                }

                $select.select2(options);
            });
        }
        
        const hasInputMaskLibs = $.fn.inputmask;
        if ($.fn.daterangepicker) {
            const inputMaskDate = languages.get("input_mask_date");
            const inputMaskDatePlaceHolder = languages.get("input_mask_date_placeholder");
            const momentDateFormat = languages.get("moment_date_format");
            container.find(".date-picker:not(.styled, .no-style)").each(function () {
                let $input = $(this).addClass('styled');
                if (hasInputMaskLibs) {
                    $input.attr('data-inputmask-alias', 'datetime').attr('data-inputmask-inputformat', inputMaskDate).attr('data-mask', 'data-mask').inputmask(inputMaskDate, { 'placeholder': inputMaskDatePlaceHolder });
                }

                $input.daterangepicker({
                    autoUpdateInput: $input.data("auto-update-input") || false,
                    autoApply: true,
                    singleDatePicker: true,
                    showDropdowns: true,
                    locale: {
                        format: momentDateFormat
                    }
                }, function(start, end, label) {
                    $input.val(start.format(momentDateFormat));
                });
            })

            const momentDateTimeFormat = languages.get("moment_datetime_format");
            const inputMaskDateTimePlaceHolder = languages.get("input_mask_datetime_placeholder");
            const inputMaskDateTime = languages.get("input_mask_datetime");
            container.find(".datetime-picker:not(.styled, .no-style)").each(function () {
                let $input = $(this).addClass('styled');
                if (hasInputMaskLibs) {
                    $input.attr('data-inputmask-alias', 'datetime').attr('data-inputmask-inputformat', inputMaskDateTime).attr('data-mask', 'data-mask').inputmask(inputMaskDateTime, { 'placeholder': inputMaskDateTimePlaceHolder });
                }

                $input.daterangepicker({
                    timePicker: true,
                    autoUpdateInput: $input.data("auto-update-input") || false,
                    autoApply: true,
                    singleDatePicker: true,
                    showDropdowns: true,
                    locale: {
                        format: momentDateTimeFormat
                    }
                }, function(start, end, label) {
                    $input.val(start.format(momentDateTimeFormat));
                });
            })
        }
    },
    destroy: (container) => {
        container = controls.getContainer(container);

        if ($.fn.DataTable) {
            container.find("table.dataTable:not(.no-style)").removeClass('styled').DataTable().destroy();
        }

        if ($.fn.select2) {
            container.find('select.styled').each(function () {
                $(this).removeClass("styled").select2("destroy");
            });
        }
    }
}

$document.on({
    ajaxStart: () => {
        Pace.restart();
        dialogs.loading.show();
    },
    ajaxStop: () => dialogs.loading.dismiss()
});

$document.ready(async function () {
    dialogs.loading.render();

    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    if (message)
    {
        if ("true" === urlParams.get("error").toLocaleLowerCase())
            toasts.error(message);
        else
            toasts.success(message);
    }
})

