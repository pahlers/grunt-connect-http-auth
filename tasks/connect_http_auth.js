/*
 * grunt-connect-http-auth
 * https://github.com/peterahlers/grunt-connect-http-auth
 *
 * Copyright (c) 2013 eonlepapillon
 * Licensed under the MIT license.
 */

'use strict';

var auth = require('http-auth'),
  utils = require('../lib/utils');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('configureHttpAuth', 'Http-auth middleware for grunt-connect.', function() {
    grunt.config.requires('connect.auth');
    utils.setBasic(auth(grunt.config('connect.auth')));
  });

};
