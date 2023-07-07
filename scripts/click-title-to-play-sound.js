Hooks.once('renderSidebarDirectory', function() {

    $('#sidebar').on('click', '.directory-list .playlist-sounds li.sound i', function(e) {
        e.stopPropagation();
    });

    $('#sidebar').on('click', '.directory-list .playlist-sounds li.sound', function() {
        const playButton = $(this).find('.sound-controls a[data-action="sound-play"] i');
        const stopButton = $(this).find('.sound-controls a[data-action="sound-stop"] i');

        if (playButton.length) {
            playButton.trigger('click');
        } else if (stopButton.length) {
            stopButton.trigger('click');
        }
    });

    $('#sidebar').on('click', '#currently-playing .sound-playback .pause.disabled', function() {
        console.log('asgasgasg')
        const playButton = $('#currently-playing .sound-controls .sound-control[data-action="sound-play"] i');
        playButton.trigger('click');
    });

});