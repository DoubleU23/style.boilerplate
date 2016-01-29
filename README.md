# DoubleU23 - Stylus lib  
> Stylus mixins, utilities, helpers, ...
The main feature is the [MQ mixin](#mq-mixin)


## Changelog:
0.1.1 - ready for Stylus.use() API  
0.1.7 - enabled [MQ's only import](#stylus-imports)  

<<<<<<< HEAD
=======
## to be done  
* set paths
* autoimport the lib
* MQ mixin+vars ONLY `.import '/mqs'`
* refactor scss leftovers
* load shared vars from JS file into `inc/variables.styl`
* testing
* change name (working title)

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
>>>>>>> 238e0c7b741db7ee9fd883af18e15fe2ef42343e

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

<<<<<<< HEAD
  To gain access to everything the lib has to offer, simply add:
=======
To gain access to everything it has to offer, simply add:
>>>>>>> 238e0c7b741db7ee9fd883af18e15fe2ef42343e

  ```css
  .import 'doubleu23-stylus'
  ```

  Or you may also pick only the MQ Vars and Mixins

  ```css
<<<<<<< HEAD
  @import 'doubleu23-stylus/mq'
=======
  // tbd - .import '/MQ'
  .import 'doubleu23-stylus/inc/reset'
  .import 'doubleu23-stylus/inc/variables'
  .import 'doubleu23-stylus/inc/mixins'
>>>>>>> 238e0c7b741db7ee9fd883af18e15fe2ef42343e
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
  - [DoubleU23](https://github.com/DoubleU23) (Original Creator)
