import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ConnectedRouter} from 'react-router-redux';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux';
import {store} from "../../src/redux/store";
import ServerRouter from "../../src/routes/server";
import manifest from '../../build/asset-manifest.json';
import sagas from '../../src/redux/sagas/index';

const path = require("path");
const fs = require("fs");

export default (req, res) => {

  let modules = [];
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }
    const requestPath = req.path;
    const reduxStore = store(requestPath);
    let context = {};
    const node = (
      <Provider store={reduxStore.configureStore()}>
        <ConnectedRouter history={reduxStore.history}>
          <ServerRouter
            location={requestPath}
            context={context}
          />
        </ConnectedRouter>
      </Provider>
    );

    reduxStore.runSaga(sagas).done.then(() => {
      const html = ReactDOMServer.renderToString(
        <Loadable.Capture report={m => modules.push(m)}>
          {node}
        </Loadable.Capture>
      );
      const extractAssets = (assets, chunks) => Object.keys(assets)
        .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
        .map(k => assets[k]);
      const extraChunks = extractAssets(manifest, modules)
        .map(c => `<script type="text/javascript" src="/${c}"></script>`);
      const response = htmlData
        .replace(
          '<div id="root"></div>',
          '<div id="root"></div><script type="text/javascript">window.__PRELOAD_STATE__ = ' + JSON.stringify(reduxStore.storeWithMiddleware.getState()) + '</script>'
        ).replace(
          '</body>',
          extraChunks.join('') + '</body>'
        )
        .replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        );
      res.send(response);
    }).catch((error) => console.log('need response error page: ', error));

    ReactDOMServer.renderToString(node);
    reduxStore.close();
  });
}