function colorFolderBackground(el) {
    let bgColor = el.find('.folder-header').css('background-color');
    el.css('--tui-bg-color', bgColor);
    el.css('--tui-bg-colorT', bgColor.replace(')', ', 0.5)').replace('rgb', 'rgba'));

    el.find('> .folder-header').removeAttr('style');
    el.find('> .subdirectory').removeAttr('style');

    el.addClass('tui-colored-folder');
}

Hooks.on('renderSidebarDirectory', function() {
    $('.sidebar-tab').each(function() {
        let list = $(this).find('.directory-list');
        if (list.length) {
            list.children().each(function() {
                if(($(this).hasClass('folder')) && !$(this).hasClass('tui-colored-folder')) {
                    colorFolderBackground($(this));
                    if($(this).find('.folder')) {
                        $(this).find('.folder').each(function() {
                            colorFolderBackground($(this));
                        })
                    }
                }
            });
        }
    });
});