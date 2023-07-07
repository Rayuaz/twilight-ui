Hooks.on("renderCompendiumDirectory", function () {
    game.packs.forEach((pack) => {
        const type = pack.metadata.type.toLowerCase();
        const id = pack.metadata.id;

        $(`#compendium .directory-item[data-pack="${id}"]`).addClass(type);
    });
});
