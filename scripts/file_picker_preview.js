Hooks.on("renderFilePicker", (app) => {

    $(`#app-${app.appId} .filepicker-header > .form-group:last-child`).append(`
        <a id="display-thumbnails" title="Display preview cards">
            <i class="far fa-clone"></i>
        </a>
    `);

    $('#display-thumbnails').on('click', function() {
        $(this).toggleClass('active');
    })

    let hoverTimeout;

    $(`#app-${app.appId} li.file`).on('mouseover', function(e) {

        if ( $('#display-thumbnails').hasClass('active')) {
            clearTimeout(hoverTimeout);

            let $this = $(this);

            let imgPath = $this.find('img').attr('src');

            if(imgPath) {

                $(`#app-${app.appId}`).append(`<img class="tui-preview" src="${imgPath}">`);

                setTimeout(() => {
                    $('.tui-preview:last-child').css({right: $('.tui-preview:last-child').width() * -1});

                    setTimeout(() => {
                        if($('.tui-preview').length > 1) {
                            $('.tui-preview').eq(0).remove();
                        }
                    }, 150);
                }, 10);

            }
        }

    });

    $(`#app-${app.appId} .files-list`).on('mouseleave', function() {

        if ($('.tui-preview').length > 0) {
            $('.tui-preview').css({right: 0});
            setTimeout(() => {
                $('.tui-preview').remove();
            }, 150);
        }

    });

});