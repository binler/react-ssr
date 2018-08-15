import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';
import App from './routes/client';
import registerServiceWorker, { unregister } from './registerServiceWorker';

Loadable.preloadReady().then(() => {
  (!!module.hot ? render : hydrate)(<App />, document.getElementById('root'));
});

/**
 * Why did you update config
 */

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

/**
 * Register service worker
 */
if (process.env.NODE_ENV === 'development') {
  unregister();
} else {
  registerServiceWorker();
}