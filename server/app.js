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

/**
 * Imports Lodash library.
 * @type {object}
 */
var _ = require('lodash');

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

/**
 * Sets headers to send email.
 *
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 */
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + appconfig.port);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent to the API
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/**
 * Gets all users.
 * @param  {object} req
 * @param  {object} res
 */
app.get('/users', function(req, res) {
    res.json(require('../client/users.json'));
});

/**
 * Gets all sheets.
 * @param  {object} req
 * @param  {object} res
 */
app.get('/sheets', function(req, res) {
    res.json(require('../client/catalog.json'));
});

/**
 * Gets all users and sheets.
 * @param  {object} req
 * @param  {object} res
 */
app.get('/catalog', function(req, res) {
    var users = require('../client/users.json');
    var sheets = require('../client/catalog.json');

    res.json(_.merge(users, sheets));
});

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
