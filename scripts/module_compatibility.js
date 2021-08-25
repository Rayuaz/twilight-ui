Hooks.on("ready", function() {

    /*
    *  Tidy 5e Sheet
    */

    if (game.modules.get('tidy5e-sheet')?.active ?? false) {
        game.settings.set("tidy5e-sheet", "colorScheme", "dark");
    }

    /*
    *  Lib Themer
    */

    if (game.modules.get('lib-themer')?.active ?? false) {
        game.modules.get('lib-themer').api.registerTheme('twiligh-ui', {
            "name": "twilight-ui",
            "title": "Twilight UI",

            "description": "<p>A dark theme for Foundry VTT. It adds some padding to pretty much everything, a Legend Keeper style journal, better folders, and replaces the spell level selection dropdown menu with buttons. It has been tested with the DnD 5e system, and I recommend you use the tidy5e sheet (in dark mode) with it.</p>",
            
            "--twilight-ui-preset": {
                "name": "Twight UI Preset",
                "type": "preset",
                "default": {
                    "lib-themer": {
                        "--palette-app-background": { "default" : "#0d0c0a" },
                        "--palette-dialog-background": { "default" : "#191716" },
                        "--palette-primary": { "default" : "#252423" },
                        "--palette-secondary": { "default" : "#f56d12" },
                        "--palette-tertiary": { "default" : "#21122F" },
                        "--palette-success": { "default" : "#418824" },
                        "--palette-danger": { "default" : "#cc2d2d" },
                        "--palette-info": { "default" : "#596cf3" }
                    },
                },
            }
        })
    }

});