# DoubleU23 - Stylus lib  
> Stylus mixins, utilities, helpers, ...
The main feature is the [MQ mixin](#mq-mixin)


## Changelog:
**0.1.1** - ready for Stylus.use() API  
**0.1.8** - prefixed the vars - $p23_varname  
**0.2.0** - stable [MQ's only import](#stylus-imports)  
**0.2.1** - injects process.env.NODE_ENV into stylus (global var $ENV__NODE_ENV)  
**0.2.3** - added assetPath() to use 'process.env.ROOT_PATH' as url-prefix  

**0.3.0** - doubleu23-stylus now accepts options (envVars, envPrefix, imgUrlPrefix)  
removed leftovers + some refactoring  

**1.0.0** - **TBD:** release with new (final) name

### Roadmap
* change working title
* testing (per ?mocha) if all imports and mixins are working  
* user should be able to overwrite MQ breakpoints  
* testing?  
* imports? paths?
* ~~let user define which process.env vars should be injected + varPrefix~~

## to be considered/refactored
* autoinclude lib?
* style.set('filename')?

## Usage
```Stylus
// tbd - autoimport
@require 'doubleu23-stylus'

html,
body
  font-size mFontSize
  +MQ('tablet')
    font-size tFontSize
  +MQ('desktop')
    font-size dFontSize

+MQ('tablet')
  .wrapper
    width 100%

+MQ('desktop')
  #page
    @extend .wrapper
```

## Installation

```bash
$ npm install doubleu23-stylus
```

## JavaScript API

__with connect/express:__
```javascript
var connect             = require('connect')
,   server              = connect()
,   stylus              = require('stylus')
,   doubleu23Stylus     = require('doubleu23-stylus')
,   options             = {
    // these are the defaults
        envVars:        process.env
    ,   envPrefix:      '$ENV__'
    ,   imgUrlPrefix:   process.env.ROOT_PATH + '/assets' // TBD
    }

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(doubleu23Stylus(options))
}

// don't ask! (copied from "nib")
// may be out of date
server.use(stylus.middleware({
    src:      __dirname
,   compile:  compile
}))
```

__with webpack:__
```javascript
var options             = {
    // these are the defaults
        envVars:        process.env
    ,   envPrefix:      '$ENV__'
    ,   imgUrlPrefix:   process.env.ROOT_PATH + '/assets' // TBD
    }
,   doubleu23Stylus     = require('doubleu23-stylus')
,   stylusLoaderDef     = {
        loader: 'stylus-loader',
        options: {
            sourceMap:  true,
            compress:   isDevelopment,
            use:        [doubleu23Stylus(options)]
        }
    }
,	  config              = {
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: isDevelopment ? [
                        { loader: 'style-loader',   options: { sourceMap: true } },
                        { loader: 'css-loader',     options: { sourceMap: true } },
                        { loader: 'postcss-loader', options: { sourceMap: true } },
                        stylusLoaderDef
                    ]
                    // for production (https://github.com/webpack-contrib/extract-text-webpack-plugin)
                    : ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader', stylusLoaderDef]
                    })
                }
            ]
        }
    }

```

## Stylus Imports  
To gain access to everything the lib has to offer, simply add:  
  ```stylus
  .import 'doubleu23-stylus'
  ```
  Or you may also pick only the MQ Vars and Mixins

  ```stylus
  // not necessary, because of auto-include
  @import 'doubleu23-stylus/mqs'
  ```

## MQ-Mixin
```stylus
	// use it on top of selectors
	body
		font-size 12px
	+MQ('tablet')
		body
			font-size 14px
	+MQ('deskop')
		body
			font-size 16px

	// or use the mixin beetween the properties
	body
		font-size 12px
		+MQ('tablet')
			font-size 14px
		+MQ('deskop')
			font-size 16px 50px 10px
		margin-right 1px
```
> **to avoid duplicate mediaqueries i use '[node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker)' in my webpack setup**

## Contributors
  - [DoubleU23](https://github.com/DoubleU23) (Original Creator)
