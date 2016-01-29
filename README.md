# DoubleU23 - Stylus lib  
> Stylus mixins, utilities, helpers, ...
The main feature is the [MQ mixin](#mq-mixin)


## Changelog:
0.1.1 - ready for Stylus.use() API  
0.1.4 - enabled [MQ's only import](#stylus-imports)


## Installation

```bash
$ npm install doubleu23-stylus
```

## JavaScript API

__with connect/express:__
```javascript
var connect = require('connect')
  , stylus = require('stylus')
  , doubleu23Stylus = require('doubleu23-stylus');

var server = connect();

function compile(str, path) {
  return stylus(str)
	.set('filename', path)
	.set('compress', true)
	.use(doubleu23Stylus());
}

server.use(stylus.middleware({
	src: __dirname
  , compile: compile
}));
```

__with webpack:__
```javascript
var doubleu23Stylus 	= require('doubleu23-stylus')
,	config = {
		[...]
		stylus: {
			use: [doubleu23Stylus()]
		}
	}
;
```

## Stylus Imports

  To gain access to everything the lib has to offer, simply add:

  ```css
  @import 'doubleu23-stylus'
  ```

  Or you may also pick only the MQ Vars and Mixins

  ```css
  @import 'doubleu23-stylus/mq'
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

## Roadmap  
* user should be able to overwrite MQ breakpoints
* testing?
* imports? (paths)

_To be continued..._

### More Information  
TBD

## Contributors
  - [Stefan Friedl](https://github.com/DoubleU23) (Original Creator)
