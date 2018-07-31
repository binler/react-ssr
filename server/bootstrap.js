const sass = require('node-sass');
const hook = require('css-modules-require-hook');

hook({
  extensions: '.scss',
  generateScopedName: '[local]__[hash:base64:5]',
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