//This is a simple server without data persistence


const express = require('express');

//hobbit routes
const hobbitRoutes = require('./hobbits/hobbitRoutes');

//Creates the server using express
const server = express();


//Below line helps us read the data sent as part of request body
server.use(express.json());
server.use('/hobbits', hobbitRoutes);

//handles request to the root of the api at '/' route
server.get('/', (req, res) => {
  res.send('Hello from Express');
})

server.get('/about', (req, res) => {
  res.status(200).send('<h1>About Us</h1>')
})

server.get('/contact', (req, res) => {
  res.status(200).send('<h1>Contact Form</h1>')
})



//Server will be running on port 4000 and it will be listening to any incoming requests
server.listen(4000, () => {
  console.log('Server running on http://localhost:4000')
})