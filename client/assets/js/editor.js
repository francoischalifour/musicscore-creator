$(function() {
    'use strict';

    var template = document.getElementById('template-editor');

    template.notation = true;
    template.tablature = false;
    template.time = '4/4';
    template.clef = 'treble';
    template.key = 'C';
    template.tuning = 'standard';

    template.clefs = [{
        'name': 'Treble',
        'value': 'treble'
    }, {
        'name': 'Alto',
        'value': 'alto'
    }, {
        'name': 'Tenor',
        'value': 'tenor'
    }, {
        'name': 'Bass',
        'value': 'bass'
    }, {
        'name': 'Percussion',
        'value': 'percussion'
    }];

    template.keys = [{
        'name': 'C'
    }, {
        'name': 'Am'
    }, {
        'name': 'F'
    }, {
        'name': 'Dm'
    }, {
        'name': 'Bb'
    }, {
        'name': 'Gm'
    }, {
        'name': 'Eb'
    }, {
        'name': 'Ab'
    }, {
        'name': 'Fm'
    }, {
        'name': 'Db'
    }, {
        'name': 'Bbm'
    }, {
        'name': 'Gb'
    }, {
        'name': 'Ebm'
    }, {
        'name': 'Cb'
    }, {
        'name': 'Abm'
    }, {
        'name': 'G'
    }, {
        'name': 'Em'
    }, {
        'name': 'D'
    }, {
        'name': 'Bm'
    }, {
        'name': 'A'
    }, {
        'name': 'F#m'
    }, {
        'name': 'E'
    }, {
        'name': 'C#m'
    }, {
        'name': 'B'
    }, {
        'name': 'G#m'
    }, {
        'name': 'F#'
    }, {
        'name': 'D#m'
    }, {
        'name': 'C#'
    }, {
        'name': 'A#m'
    }];

    template.tunings = [{
        'name': 'Standard',
        'value': 'standard'
    }, {
        'name': 'Drop D',
        'value': 'dropd'
    }, {
        'name': 'Eb',
        'value': 'Eb'
    }, {
        'name': 'E/5',
        'value': 'E/5'
    }, {
        'name': 'B/4',
        'value': 'B/4'
    }, {
        'name': 'G/4',
        'value': 'G/4'
    }, {
        'name': 'D/4',
        'value': 'D/4'
    }, {
        'name': 'A/3',
        'value': 'A/3'
    }, {
        'name': 'E/3',
        'value': 'E/3'
    }];

    template.notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
});