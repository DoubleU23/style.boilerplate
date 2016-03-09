/*!
 * doubleu23-stylus
 * Copyright (c) 2015 Stefan Friedl <dev@project23.org>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var stylus 	= require('stylus'),
    path 	= require('path'),
    nodes 	= stylus.nodes,
    utils 		= stylus.utils,
    Canvas;

exports = module.exports = plugin;

// leftover from 'nib'
// conditionally expose canvas-based APIs.
// try {
//   Canvas = require('canvas');

//   var gradient = require('./nodes/gradient'),
//       colorImage = require('./nodes/color-image');
// } catch (err) {
//   // ignore
// }


/**
 * Library version.
 */

exports.version = require(path.join(__dirname, '../package.json')).version;

/**
 * Stylus path.
 */

exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */


var paths = [
    __dirname
  , __dirname + '/doubleu23-stylus'
];

function plugin() {
  return function(style){
    style.include(__dirname);
    style.set('filename', 'doubleu23-stylus');
    style.set('filename', 'doubleu23-stylus/mqs');
    // style.set('paths', paths);

// tbd - define env-vars to inject (+ varPrefix) on init
style.define('$ENV__NODE_ENV', process.env.NODE_ENV);
if (process.env.CLIENT) {
style.define('$ENV__CLIENT', process.env.CLIENT);
}

    if (Canvas) {
      style.define('has-canvas', nodes.true);

      // gradients
      style.define('create-gradient-image', gradient.create);
      style.define('gradient-data-uri', gradient.dataURL);
      style.define('add-color-stop', gradient.addColorStop);

      // color images
      style.define('create-color-image', colorImage.create);
      style.define('color-data-uri', colorImage.dataURL);
    } else {
      style.define('has-canvas', nodes.false);
    }
  };
}
