import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(<App />, document.getElementById('root'));
registerServiceWorker();
