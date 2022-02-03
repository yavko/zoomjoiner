function setTray() {
    if(NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            {id: "TEST", text: "test"},
            {id: "SEP", text: "-"},
            {id: "SETTINGS", text: "settings"},
            {id: "VERSION", text: "version"},
            {id: "QUIT", text: "quit"}
        ]
    };
    Neutralino.os.setTray(tray);
}

async function onTrayMenuItemClicked(event) {
    switch(event.detail.id) {
        case "SETTINGS":
            await Neutralino.window.create('/settings.html', {
                icon: '/resources/icons/appIcon.png',
                enableInspector: true,
                hidden: false,
                width: 500,
                height: 300,
                maximizable: false,
                alwaysOnTop: true,
                exitProcessOnClose: false,
                processArgs: '--window-id=W_SETTINGS'
            });
            break;
        case "VERSION":
            Neutralino.os.showMessageBox("Version information",
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION} | Zoom Joiner: v${NL_APPVERSION}`);
            break;
        case "QUIT":
            Neutralino.app.exit();
            break;
    }
}

function onWindowClose() {
   Neutralino.window.hide();
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
Neutralino.events.on("windowClose", onWindowClose);


if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray();
}