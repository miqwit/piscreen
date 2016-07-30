
function deactivateAllPanels() {
    $("[id^=panel-]").hide();
}

function activatePanel(name) {
    deactivateAllPanels();
    $("#panel-" + name).show();
}

// Everything with a panel attribute will display correspongin panel
$("[panel]").click(function() {
    panel_name = this.getAttribute('panel');
    activatePanel(panel_name);
});

// Hide all panels at startup
deactivateAllPanels();