Hooks.on('renderCompendiumDirectory', function() {
    game.packs.forEach(pack => {
        const type = pack.metadata.type.toLowerCase();
        const id = pack.metadata.id;

        $(`#compendium .directory-item[data-pack="${id}"]`).addClass(type)
    });




    // $('#compendium .directory-item').each(function() {
    //     let compendiumType = $(this).find('.document-type').text().toLowerCase();
    //     $(this).addClass(compendiumType);
    // });
});