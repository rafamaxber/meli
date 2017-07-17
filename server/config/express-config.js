const express = require('express');
const consign = require('consign');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Logger = require('../services/Logger');

module.exports = () => {
  const app = express();
  
  app.use(morgan('common', {
    stream: {
      write: (message) => Logger.info(message)
    }
  }));
  
  app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    next();
  });

  app.use(cors());
  
  app.use(bodyParser.urlencoded({ extended: false }));
  
  app.use(bodyParser.json());
  
  
  consign()
    .include('services')
    .then('controllers')
    .then('routes')
    .into(app);
    
  return app;
}