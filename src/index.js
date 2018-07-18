import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import App from './routes/client';
import registerServiceWorker from './registerServiceWorker';

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('root'));
    registerServiceWorker();
  });
};
