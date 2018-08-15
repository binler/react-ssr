const sass = require('node-sass');
const hook = require('css-modules-require-hook');
const generateScopedName = require('../config/css');

hook({
  extensions: '.scss',
  generateScopedName: (name, filepath) => {
    return generateScopedName(name, filepath);
  },
  preprocessCss: function (css, filepath) {
    const result = sass.renderSync({
      data: css
    });
    return result.css;
  }
});

require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['es2015', 'react-app'],
  plugins: [
    'transform-decorators-legacy',
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel'
  ]
});

require('./index');