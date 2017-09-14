// src/server.js

import path from 'path';
import { Server  } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString  } from 'react-dom/server';
import App from './src/components/App';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
app.get('*', (req, res) => {
  // generate the React markup for the current route
  let markup;
  markup = renderToString(<App />);

  // render the index template with the embedded React markup
  return res.render('index', { markup  });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
