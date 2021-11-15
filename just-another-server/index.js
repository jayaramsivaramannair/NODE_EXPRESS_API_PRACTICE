const express = require('express');

const raceRoutes = require('./races/raceRoutes');
const villianRoutes = require('./villians/villianRoutes');
const mellonRoutes = require('./mellon/mellonRoutes');

const server = express();


//A simple middleware which logs information about every incoming request to the server
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`)

  next();
}


//Authentication middleware - Application wide middleware which will log every time a request is made
function atGate(req, res, next) {
  console.log('At the gate, about to be eaten');

  next();
}

server.use(express.json())
server.use(logger)
server.use(atGate);


server.use('/races', raceRoutes);
server.use('/villians', villianRoutes);
server.use('/', mellonRoutes);

server.use('/', (req, res) => {
  res.send('API is up and running!');
})

module.exports = server;
