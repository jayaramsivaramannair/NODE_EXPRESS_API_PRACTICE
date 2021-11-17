require('dotenv').config();
const express = require('express');

const server = express();

const port = process.env.PORT || 8000;


server.get('/', (req, res) => {
  res.status(200).send('API for managing projects, resources and tasks is up and running 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️')
})


server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})