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

router.use('*', serverRenderer);

app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
  });
});