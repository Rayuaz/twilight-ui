Hooks.on("ready", function() {

    const hasTidySheet = game.modules.get('tidy5e-sheet')?.active;
    if (hasTidySheet) {
        game.settings.set("tidy5e-sheet", "colorScheme", "dark");
    }

});