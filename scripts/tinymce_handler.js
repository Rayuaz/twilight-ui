Hooks.on("init", () => {

    // Queue styles
    CONFIG.TinyMCE.content_css.push(`/modules/twilight-ui/twilight-ui.css`);

    // Add the toolbar on hover
	CONFIG.TinyMCE.setup = function (editor) {
        editor.ui.registry.addContextToolbar('imagealignment', {
            predicate: function (node) {
                return node.nodeName.toLowerCase() === 'img'
            },
            items: 'alignleft aligncenter alignright',
            position: 'node',
            scope: 'node'
        });

        editor.ui.registry.addContextToolbar('textselection', {
            predicate: function (node) {
                return !editor.selection.isCollapsed();
            },
            items: 'styleselect | bold italic underline strikethrough | link | bullist numlist | blockquote | table | superscript subscript | removeformat',
            position: 'selection',
            scope: 'node'
        });

        editor.ui.registry.addContextMenu('quickimage', {
            update: function(element) {
              return ['image'];
            }
        });
    }

    // Add a right click menu
    CONFIG.TinyMCE.contextmenu = "cut copy paste | quickimage hr | code";

    //Register info panel sections
    const customFormats = CONFIG.TinyMCE.style_formats.find(x => x.title === "Custom");
    customFormats.items.push(
        {
            title: "Info Panel",
			block: 'div',
			classes: ['smui-panel', 'smui-info'],
			wrapper: true
        },
		{
			title: "Note Panel",
			block: 'div',
			classes: ['smui-panel', 'smui-note'],
			wrapper: true
		},
		{
			title: "Success Panel",
			block: 'div',
			classes: ['smui-panel', 'smui-success'],
			wrapper: true
		},
		{
			title: "Warning Panel",
			block: 'div',
			classes: ['smui-panel', 'smui-warning'],
			wrapper: true
		},
		{
			title: "Error Panel",
			block: 'div',
			classes: ['smui-panel', 'smui-error'],
			wrapper: true
		}
	);

});






Hooks.on('ready', function() {

    // When user clicks the edit button
    $(document).on('click', '.editor-edit', function() {
        let elem = $(this);
        let windowContent;
        let isJournal = false;
        if (elem.parent().parent().parent().parent().hasClass('journal-sheet')) {
            isJournal = true;
            windowContent = elem.parent().parent().parent();
        }

        setTimeout(() => {
            elem = elem.parent().find('iframe').contents();
            tinymceHandler(elem, isJournal, windowContent);
        }, 100);
    });

    // When user clicks the create new journal entry button
    $(document).on('click', '.dialog-button:contains("Create New Journal Entry")', function() {
        setTimeout(() => {
            let elem = $('.journal-sheet').find('iframe').contents();
            let windowContent = elem.find('.window-content');
            tinymceHandler(elem, true, windowContent);
        }, 100);
    }) 




    function tinymceHandler(elem, isJournal, windowContent) {

        if (isJournal) {
            css = `<style>#tinymce{padding: 25px;height: 100vh;overflow:hidden;}.bottom-spacer{height: 50px}</style>`;
            elem.find("head").append(css);

            let windowheight = parseInt(windowContent.outerHeight());
            console.log(windowheight);

            let editorHeight = parseInt($('.tox-tinymce').css('height'));
            $('.tox-tinymce').css('height', `${editorHeight + 100 + 'px'}`);
            $('.tox-tinymce').css('min-height', `${windowheight - 122 + 'px'}`);

            let timeOut = false;
            elem.find('body').on('DOMSubtreeModified', function() {
                if (timeOut == false) {
                    resizeWindow(elem.find('body'));
                    timeOut = true;
                    setTimeout(() => {
                        timeOut = false;
                    }, 200);
                }
            });
        } else {

            setTimeout(() => {
                console.log($('tox.tox-silver-sink.tox-tinymce-aux'));
                $('tox.tox-silver-sink.tox-tinymce-aux').css('display: none');
            }, 300);

        }
    }

    function resizeWindow(elem) {
        let contentHeight = 100;

        elem.children().each(function() {
            contentHeight += $(this).outerHeight(true);
        });

        $('.tox-tinymce').css('min-height', `${parseInt(contentHeight) + 'px'}`);
    }

});