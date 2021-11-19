require('dotenv').config();
const express = require('express');

const server = express();

const projectRoutes = require('./api/projects/projectRouter');
const resourceRoutes = require('./api/resources/resourceRouter');
const taskRoutes = require('./api/tasks/taskRouter');

const port = process.env.PORT || 8000;

server.use(express.json());
server.use('/api/projects', projectRoutes);
server.use('/api/resources', resourceRoutes);
server.use('/api/tasks', taskRoutes);



server.get('/', (req, res) => {
  res.status(200).send('API for managing projects, resources and tasks is up and running 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️')
})


server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})