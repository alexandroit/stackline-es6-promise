# @stackline/es6-promise

> A lightweight library that provides tools for organizing asynchronous code.

[![npm version](https://img.shields.io/npm/v/@stackline/es6-promise.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/es6-promise)
[![license](https://img.shields.io/npm/l/@stackline/es6-promise.svg?style=flat-square)](https://github.com/alexandroit/stackline-es6-promise)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-es6-promise-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-es6-promise)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/es6-promise/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/es6-promise/)** | **[npm](https://www.npmjs.com/package/@stackline/es6-promise)** | **[Issues](https://github.com/alexandroit/stackline-es6-promise/issues)** | **[Repository](https://github.com/alexandroit/stackline-es6-promise)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/es6-promise` is the Stackline-maintained distribution of `es6-promise@4.2.8`. It is an independent continuation of [es6-promise](https://github.com/stefanpenner/es6-promise); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/es6-promise@1.0.1` |
| API target | `es6-promise@4.2.8` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `dist/es6-promise.js` |
| Types | `es6-promise.d.ts` |
| Runtime dependencies | `none` |

## Installation

```bash
npm install @stackline/es6-promise
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install es6-promise@npm:@stackline/es6-promise
```

## Usage and API reference

### ES6-Promise (subset of [rsvp.js](https://github.com/tildeio/rsvp.js)) [![Build Status](https://travis-ci.org/stefanpenner/es6-promise.svg?branch=master)](https://travis-ci.org/stefanpenner/es6-promise)

This is a polyfill of the [ES6 Promise](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor). The implementation is a subset of [rsvp.js](https://github.com/tildeio/rsvp.js) extracted by @jakearchibald, if you're wanting extra features and more debugging options, check out the [full library](https://github.com/tildeio/rsvp.js).

For API details and how to use promises, see the <a href="http://www.html5rocks.com/en/tutorials/es6/promises/">JavaScript Promises HTML5Rocks article</a>.

## Downloads

* [es6-promise 27.86 KB (7.33 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.js)
* [es6-promise-auto 27.78 KB (7.3 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js) - Automatically provides/replaces `Promise` if missing or broken.
* [es6-promise-min 6.17 KB (2.4 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.min.js)
* [es6-promise-auto-min 6.19 KB (2.4 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js) - Minified version of `es6-promise-auto` above.

## CDN 

To use via a CDN include this in your html:

```html

<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script> 


<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script> 

```

## Node.js

To install:

```sh
yarn add @stackline/es6-promise
```

or

```sh
npm install @stackline/es6-promise
```

To use:

```js
var Promise = require('@stackline/es6-promise').Promise;
```


## Usage in IE<9

`catch` and `finally` are reserved keywords in IE<9, meaning
`promise.catch(func)` or `promise.finally(func)` throw a syntax error. To work
around this, you can use a string to access the property as shown in the
following example.

However most minifiers will automatically fix this for you, making the
resulting code safe for old browsers and production:

```js
promise['catch'](function(err) {
  // ...
});
```

```js
promise['finally'](function() {
  // ...
});
```

## Auto-polyfill

To polyfill the global environment (either in Node or in the browser via CommonJS) use the following code snippet:

```js
require('@stackline/es6-promise').polyfill();
```

Alternatively

```js
require('es6-promise/auto');
```

Notice that we don't assign the result of `polyfill()` to any variable. The `polyfill()` method will patch the global environment (in this case to the `Promise` name) when called.

## Building & Testing

You will need to have PhantomJS installed globally in order to run the tests.

`npm install -g phantomjs`

* `npm run build` to build
* `npm test` to run tests
* `npm start` to run a build watcher, and webserver to test
* `npm run test:server` for a testem test runner and watching builder

## Credits and original authors

- Original project: [es6-promise](https://github.com/stefanpenner/es6-promise).
- Yehuda Katz, Tom Dale, Stefan Penner and contributors.
- Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-es6-promise).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
