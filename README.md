# DoubleU23 - Stylus lib  
> Stylus mixins, utilities, helpers, ...

## to do:  
* set paths
* autoimport the lib
* MQ mixin+vars ONLY `.import '/mqs'`
* refactor scss leftovers
* load shared vars from JS file into `inc/variables.styl`
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

## Stylus API

  To gain access to everything nib has to offer, simply add:

  ```css
  .import 'doubleu23-stylus'
  ```

  Or you may also pick and choose based on the directory structure in `./lib`, for example:

  ```css
  // tbd - .import '/MQ'
  .import 'doubleu23-stylus/reset'
  .import 'doubleu23-stylus/variables'
  .import 'doubleu23-stylus/mixins'
  ```

_To be continued..._

## More Information

## Testing - to be done

## Contributors
  - [DoubleU23](https://github.com/DoubleU23) (Original Creator)
