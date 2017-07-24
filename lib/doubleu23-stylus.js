/*!
 * doubleu23-stylus
 * Copyright (c) 2015 Stefan Friedl <dev@project23.org>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

let stylus  = require('stylus'),
    path    = require('path'),
    nodes   = stylus.nodes,
    utils   = stylus.utils

exports = module.exports = plugin

/**
 * Library version.
 */

exports.version = require(path.join(__dirname, '../package.json')).version

/**
 * Stylus path.
 */

exports.path = __dirname

var imgUrlPrefix,
    envVars, envVarsToInject, envPrefix, envVal,
    parseBoolean = function(val) {
        if (val === 'true' || val === 'TRUE')   return true
        if (val === 'false' || val === 'FALSE') return false

        return val
    }

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */
function plugin(options) {
    options      = options              || {}
    envVars      = options.envVars      || []
    envPrefix    = options.envPrefix    || '$ENV__'
    imgUrlPrefix = options.imgUrlPrefix || process.env.ROOT_PATH + '/assets'

    envVarsToInject = envVars.length ? envVars : process.env

    return function(style) {
        // do NOT autoinclude!
        // becasue of performance and declarative style (= no black magick)
        // style.include(__dirname)

        // do NOT push __dirname into paths
        // style.set('paths', [__dirname])

        // pass the filename option to provide better error reporting.
        style.set('filename', 'doubleu23-stylus')

        // envVars
        Object.keys(envVarsToInject).map(function(envKey) {
            envVal = parseBoolean(envVarsToInject[envKey])
            style.define(envPrefix + envKey, envVal)
        })

        // always (!) set $ENV__NODE_ENV
        if ((options.envVars != null && options.envVars['NODE_ENV'] == null)
        || envPrefix !== '$ENV__') {
            style.define('$ENV__' + 'NODE_ENV', process.env.NODE_ENV)
        }

        // assetPath()
        style.define('assetPath', function(input) {
            return imgUrlPrefix + input.val
        })

        // mediaQueries
        if (options.mediaQueries) {
            Object.keys(options.mediaQueries).map(function(key) {
                style.define('$stylus_mq_' + key, options.mediaQueries[key])
                return true
            })
        }
    }
}
