import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {store} from "../../src/redux/store";
import ServerRouter from "../../src/routes/server";

const path = require("path");
const fs = require("fs");

export default (req, res) => {

  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }
    const requestPath = req.path;
    const reduxStore = store(requestPath);

    const html = ReactDOMServer.renderToString(
      <Provider store={reduxStore.configureStore()}>
        <ConnectedRouter history={reduxStore.history}>
          <ServerRouter
            location={requestPath}
          />
        </ConnectedRouter>
      </Provider>
    );

    console.log(html); // null

    const response = htmlData.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    console.log(1, response);

    return res.send(response);
  });
}