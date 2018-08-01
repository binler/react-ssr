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

router.use('/static/imgs', express.static(
  path.join(__dirname, '..', 'build', 'static', 'imgs'),
  { maxAge: '30d' },
));

router.use('/static/css', express.static(
  path.join(__dirname, '..', 'build', 'static', 'css'),
  { maxAge: '30d' },
));

router.use('/static/js', express.static(
  path.join(__dirname, '..', 'build', 'static', 'js'),
  { maxAge: '30d' },
));

router.get('/service-worker.js', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'build', 'service-worker.js'));
});

router.get('/manifest.json', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'build', 'manifest.json'));
});

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