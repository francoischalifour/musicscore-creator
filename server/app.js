/*
 * Loads dependencies.
 */

/**
 * Imports Express web development framework.
 *
 * @type {object}
 */
var express = require('express');

/**
 * Uses the HTTP server.
 *
 * @type {object}
 */
var http = require('http');

/**
 * Imports utilities for handling and transforming file paths.
 *
 * @type {object}
 */
var path = require('path');

/*
 * Loads internal dependencies.
 */
var appconfig = require('./app-config');

/**
 * Creates app using Express.
 *
 * @type {object}
 * @private
 */
var app = express();

/*
 * Configures the server.
 */
app.use(express.static(path.join(__dirname, '/../client')));
app.set('port', appconfig.port || 3000);

/*
 * Starts the server.
 */
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + server.address().port + '...');
});
