const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

require('./db.js');

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use('/', router);

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
  

module.exports = server;
