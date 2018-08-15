import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import App from './routes/client';
import registerServiceWorker, { unregister } from './registerServiceWorker';

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('root'));
  });
};

/**
 * Register service worker
 */
if (process.env.NODE_ENV === 'development') {
  unregister();
} else {
  registerServiceWorker();
}