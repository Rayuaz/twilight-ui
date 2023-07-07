Hooks.on('renderSidebarDirectory', function() {

    if (!$('#sidebar-buttons').length) {

        $('#sidebar').prepend(`
            <div id="sidebar-buttons"></div>
        `);

        $('#sidebar').on('click', `#sidebar-buttons button`, function() {
            const title = $(this).attr('title');
            const realButton = $(`.sidebar-tab.active .directory-header button:contains(${title})`)

            realButton.trigger('click');
        });

    }

});

Hooks.on('changeSidebarTab', function() {

    $('#sidebar-buttons').html('');

    $('.sidebar-tab.active .header-actions button').each(function() {
        const buttonClass = $(this).attr('class');
        const buttonText = $(this).text();
        const buttonIcon = $(this).find('i').attr('class');

        $('#sidebar-buttons').append(`
            <button class="${buttonClass}" title="${buttonText}"><i class="${buttonIcon}"></i></button>
        `);

    });

});