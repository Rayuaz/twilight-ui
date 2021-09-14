Hooks.on("renderFilePicker", (app) => {

    // if (app.displayMode == 'tiles') {

    //     $(`#app-${app.appId} li.file`).each(function() {
    //         if ($(this).find('img').length > 0) {
    //             let $this = $(this);
    //             setTimeout(() => {
    //                 //let imageSrc = $this.attr('data-path');
    //                 let imageSrc = $this.find('img').attr('src');
    //                 if (imageSrc) {
    //                     console.log('ay');
    //                     createThumbnail(imageSrc);
    //                 }
                    
    //             }, 1000);
    //         }
    //     });

    //     function createThumbnail(url, format = "webp", q = 0.92) {
    //         source = document.createElement("img");
    //         source.crossOrigin = "Anonymous";
    //         source.src = url;

    //         source.addEventListener("load", () => {
    //             const canvas = document.createElement("canvas");
    //             const context = canvas.getContext("2d");
    //             const aspect = source.height / source.width;
    //             canvas.width = 512;
    //             canvas.height = 512 * aspect;
    //             context.drawImage(source, 0, 0, 512, 512 * aspect);
    //             document.body.appendChild(canvas);
        
    //             console.log(canvas.toDataURL("image/" + format, q));
    //         });
    //     };
    // }

    $(`#app-${app.appId} .filepicker-header > .form-group:last-child`).append(`
        <a id="display-thumbnails" title="Display preview cards">
            <i class="far fa-clone"></i>
        </a>
    `);

    $('#display-thumbnails').on('click', function() {
        $(this).toggleClass('active');
    });

    let hoverTimeout;

    $(`#app-${app.appId} li.file`).on('mouseover', function(e) {

        if ( $('#display-thumbnails').hasClass('active')) {
            clearTimeout(hoverTimeout);

            let $this = $(this);

            let imgPath = $this.find('img').attr('src');
            let isLarge;

            if (imgPath) {

                if (imgPath == 'icons/svg/video.svg') {

                    let videoSrc = $this.attr('data-path');

                    $(`#app-${app.appId}`).append(`
                        <video class="tui-preview" autoplay loop>
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    `);

                    setTimeout(() => {
                        $('.tui-preview:last-child').css({right: $('.tui-preview:last-child').width() * -1});
    
                        setTimeout(() => {
                            if($('.tui-preview').length > 1) {
                                $('.tui-preview').eq(0).remove();
                            }
                        }, 150);
                    }, 10);

                } else {
                    createThumbnail(imgPath);
                }

            }

            function createThumbnail(url, format = "webp", q = 0.92) {
                source = document.createElement("img");
                source.crossOrigin = "Anonymous";
                source.src = url;
    
                source.addEventListener("load", () => {

                    if (source.height > 1000 || source.height > 1000) {

                        const canvas = document.createElement("canvas");
                        const context = canvas.getContext("2d");
                        const aspect = source.height / source.width;
                        canvas.width = 512;
                        canvas.height = 512 * aspect;
                        context.drawImage(source, 0, 0, 512, 512 * aspect);
                        document.body.appendChild(canvas);                 
                
                        $(`#app-${app.appId}`).append(`<img class="tui-preview" src="${canvas.toDataURL("image/" + format, q)}">`);

                        canvas.remove();

                        setTimeout(() => {
                            $('.tui-preview:last-child').css({right: $('.tui-preview:last-child').width() * -1});
        
                            setTimeout(() => {
                                if($('.tui-preview').length > 1) {
                                    $('.tui-preview').eq(0).remove();
                                }
                            }, 150);
                        }, 40);

                    } else {

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

                });
            };
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