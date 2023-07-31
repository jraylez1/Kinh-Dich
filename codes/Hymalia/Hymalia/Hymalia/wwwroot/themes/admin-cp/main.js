$document.ready(function () {
    $("#btnSignOut").click(async function (e) {
        e.preventDefault();
        if (await dialogs.confirm("Do you want to sign-out?"))
            location.href = this.href;
    });

    $("#btnChangePassword").click(async function (e) {
        e.preventDefault();
        window.dlgChangePwd = dialogs.load({
            title: languages.get("Change password"),
            url: this.href,
            buttons: [{
                cssClass: "btn-primary",
                type: "submit",
                hotkey: 13,
                text: languages.get("Save changes")
            }, {
                cssClass: "btn-default",
                close: true,
                text: languages.get("Close")
            }]
        })
    });
    
    let $modules = $(".auto-module");
    for (let i = 0; i < $modules.length; i++) {
        let $module = $($modules[i]);
        let configs = JSON.parse($module.find('[name="module_configs"]').val());
        window[configs.key] = $module.createModule(configs);
    }
    
    controls.init();
    
    $("#changeCurrentDepartment").change(function () {
       location.href = "/Home/SetCurrentDepartment/" + this.value; 
    });
});

function onChangePasswordSubmitted(form, response) {
    if (response.error)
        return;

    if (window.dlgChangePwd)
        window.dlgChangePwd.hide();
}

var url = window.location;

$('ul.nav-treeview a').filter(function() {
    if(this.href == url){
        $(this).addClass('active').parentsUntil(".nav-sidebar > .nav-treeview").addClass('menu-open')
    }
});