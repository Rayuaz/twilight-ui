# Twilight UI Changelog

## v1.07

- Added basic support for Lib Themer

## v1.06

- Tidied up the colors
- Added CSS Variables
- Redesigned the `.form-groups` to be easier to navigate trough the forms
- Added a submodule to separate long form sections into tabs
- Fixed `.control-tools` height.

### Module Compatibility

- Sets Tidy 5e sheet's color scheme to dark
- A few fixes for Simple Calendar
    - Removed the work-around-CSS from the moon icons
    - Changed the Simple Calendar settings styles
- Did what I could to make the Midi QoL settings form not broken...
- Added compatibility for Chat Reactions

### A bunch of minor tweaks:

- Removed padding from table draw icons on chat
- Changed the Token Action Hud's subcategory dividers
- Added an `pre {color: $white1!important}` on the journal editor to bypass the default inline styles
- Added colored backgrounds for criticals and fumbles on the default roll card, matching the Better Rolls styling
- Added 3px of margin between Better Rolls' `.dice-rows`
- Removed `whitespace: nowrap` from `.message-sender` in chat
- Changed entity links to be a little less disruptive to the flow of reading
- Changed `.tab`s and `select`s styling to make it less ambiguous with `input[type="text"]`s
- Fixed background color for Monk's Token Toolbar dropdown menus
- Added styles for the settings tab and the manage modules window
- Tweaked Small Time's background color to match the rest of the app
- Changed `.roll-type-select`'s background color to match the other selects
- Fixed Socket Settings' buttons styling

## v1.05

-Fixed the background color on Simultaneous Combat System's window.

## v1.04

- Added support for Sidebar Aesthetics
- Fixed Giffyglyph's Monster Maker's font color
- Removed bottom margin from DM Screen
- Fixed scenes context menus bug

## v1.03

- Fixed journal image buttons
- Removed padding from journal images
- Fixed overflowing "create compendium" text
- Fixed `!important` causing problems with Compendium Folders
- Lightened the window headers, to make it not disappear on darker backgrounds
- Added `display: grid` to the sidebar header buttons, to better accomodate more buttons
- Tweaked the border colors in the Compendium / Macro Folders modules
- Added a white background to the CodeMirror editor
- Fixed inline GM rolls
- Added basic compatibility with Thandul Toggleables
- Fixed styles for SocketSettings by Blitz
- Added support for SoundBoard by Blitz
- Added a little margin after the sidebar search input
- Changed the window tab styles to better handle overly long labels
- Tweaked the tabbs in the DnD 5e sheet
- Added compatibility for Monks Tokenbar
- Fixed the select menu in Combat Utility Belt
- Fixed Party Overview table styles
- Fixed GM Screen Buttons
- Added partial compatibility with Monk's Enhaced Journal
- Added Compatibility with Polyglot
- Fixed moulinette controls bar

## v1.02.1

- Fixed the spell button styling

## v1.02

- A few tweaks to the default 5e sheet
- Fixed DnD 5e's default vehicle sheet
- Made whispers more distinctive
- Added full compatibility with Simple Calendar and Compendium Browser
- Dettached Spell Level Buttons and Colored Folder from the module

## v1.01

- Fixed roll flavor text color
- Fixed better rolls heart icon
- Made the whisper border color a little less obnoxious
- Removed some console.log()s from the tinymce_handler
- Moved the 25px padding from .editor-container to .editor, to make it more universally usable
- Fixed the tidy5e actor sheet tinyMCE editors
- Created a systems.scss file to keep it a little more organized. Might make it into a folder in the future
    - Moved the DnD5e styles from app.scss to systems.scss
- Fixed some compatibility issues for Pathfinder 2e, Fate Core, and Call of Cthulhu 7e