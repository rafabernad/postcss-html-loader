# PostCSS - HTML Loader

[![Greenkeeper badge](https://badges.greenkeeper.io/PolymerX/postcss-html-loader.svg)](https://greenkeeper.io/)

[![GitHub release](https://img.shields.io/github/release/PolymerX/postcss-html-loader.svg?style=flat-square)](https://github.com/PolymerX/postcss-html-loader)
[![Build Status](https://travis-ci.org/PolymerX/postcss-html-loader.svg?branch=master&style=flat-square)](https://travis-ci.org/PolymerX/postcss-html-loader)
[![Build status](https://ci.appveyor.com/api/projects/status/0ksik9f3euryjq9x?svg=true)](https://ci.appveyor.com/project/LasaleFamine/postcss-html-loader)
[![Coverage Status](https://coveralls.io/repos/github/PolymerX/postcss-html-loader/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/PolymerX/postcss-html-loader?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![postcss-html-loader](https://img.shields.io/badge/polymerX-postcss--html--loader-red.svg?style=flat-square)](https://github.com/PolymerX/postcss-html-loader)

> PostCSS Webpack loader for HTML templates (usually for Polymer 3.x). Works in combination with the [text-loader](https://www.npmjs.com/package/text-loader).

# Install

    yarn add --dev postcss-html-loader

# Setup configurations

Add the `postcss` configuration file:

#### postcss.config.js

> NOTE: you need to add these (or other) plugins as project dependencies.

```js
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'autoprefixer': {},
    'cssnano': {}
  }
}
```

Add the loader to your `webpack` config:

#### webpack.config.js

```js

module.exports = {
  module: {

    ...

    rules: [

      ...

     {
        test: /\.html$/,
        use: ['text-loader', 'postcss-html-loader']
      }
    ]

    ...

  }
}

```


# Setup project

As stated, this loader needs an text loader to load the HTML template, like the [text-loader](https://www.npmjs.com/package/text-loader). More specifically you can load an `HTML` template from and external file and use it within a Polymer 3.x `template`.

## Folder structure (example)

    |– src
    | |– awesome-component
    | | |– index.js
    | | |- template.html
    | | |- style.postcss
    | |
    | |- global-style.postcss
    | |- main-entry.js
    |
    |– postcss.config.js
    |– webpack.config.js

## `awesome-component/template.html` (example)

```html
<postcss src="./../global-style.postcss"></postcss>
<postcss src="./style.postcss"></postcss>

<div>
  <div class="TestDivOne"></div>
  <div class="TestDivTwo"></div>
</div>
```

## `awesome-component/index.js` (example)

```js

import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import template from './template.html';

class AwesomeComponent extends PolymerElement {
  static get properties() {
    return {
        prop1: {
        type: String,
        value: 'This is awesome!'
      }
    }
  };

  static get template() {
    return template;
  };
};

window.customElements.define('awesome-component', AwesomeComponent);

```

## `main-entry.js` (example)

```js

import './src/awesome-component';

```


## License

MIT © LasaleFamine