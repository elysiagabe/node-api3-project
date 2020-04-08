const express = require('express');

const server = express();

const userRouter = require('./users/userRouter');

// implement custom middleware
server.use(logger);

server.use(express.json());

// use userRouter
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// ~~~ CUSTOM MIDDLEWARE ~~~ //
function logger(req, res, next) {
  console.log(`Request: ${req.method} to ${req.originalUrl} at [${new Date().toISOString()}]`);
  next();
}

module.exports = server;
