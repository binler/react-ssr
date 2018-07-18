import express from 'express';
import Loadable from 'react-loadable';

import serverRenderer from './middleware/renderer';

const path = require('path');

const PORT = 3000;

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'build', 'static')));

app.get('*', serverRenderer);

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
  });
});