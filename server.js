const express = require('express');

//Creates the server using express
const server = express();

//handles request to the root of the api at '/' route
server.get('/', (req, res) => {
  res.send('Hello from Express');
})


server.listen(4000, () => {
  console.log('Server running on http://localhost:4000')
})