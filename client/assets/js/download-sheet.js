$(function() {
    'use strict';

    /**
     * Downloads sheet music as image.
     */
    $('#downloadLink').on('click', function(e) {
        e.preventDefault();

        var sheet = document.querySelector('.vex-canvas');

        Canvas2Image.saveAsImage(sheet, sheet.width, sheet.height, 'png');
    });
});
