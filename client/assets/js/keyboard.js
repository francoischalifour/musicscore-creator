$(function() {
    'use strict';

    var $write = $('#write');

    $('#keyboard li').click(function() {
        var $this = $(this);
        var character = $this.html()

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();

            $write.html(html.substr(0, html.length - 1));

            return false;
        }

        // Special characters
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";
        if ($this.hasClass('alteration') || $this.hasClass('spechar')) {
            var html = $write.html();
            $write.html(html.substr(0, html.length - 1));
        }

        // Add the character
        $write.html($write.html() + character);
    });
});
