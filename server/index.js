import express from 'express';
import Loadable from 'react-loadable';

import serverRenderer from './middleware/renderer';

const path = require('path');

const PORT = 3000;

const app = express();
const router = express.Router();

router.use('/static', express.static(
  path.join(__dirname, '..', 'build', 'static'),
  { maxAge: '30d' },
));

router.use('/service-worker.js', express.static(
  path.join(__dirname, '..', 'build', 'service-worker.js'),
  { maxAge: '30d' },
));

router.use('/manifest.json', express.static(
  path.join(__dirname, '..', 'build', 'manifest.json'),
  { maxAge: '30d' },
));

router.get('*', serverRenderer);

app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
  });
});