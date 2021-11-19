require('dotenv').config();
const express = require('express');

const server = express();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const projectRoutes = require('./api/projects/projectRouter');
const resourceRoutes = require('./api/resources/resourceRouter');
const taskRoutes = require('./api/tasks/taskRouter');

const port = process.env.PORT || 8000;

server.use(express.json());
server.use('/api/projects', projectRoutes);
server.use('/api/resources', resourceRoutes);
server.use('/api/tasks', taskRoutes);

// swagger definition
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Data Persistence API',
      version: '1.0.0',
      description: 'Test API for Demonstrating Data Persistence in SQLite',
    },
    servers: [
      {
        url: `http://localhost:${port}`
      }
    ]
  },
  apis: ['./api/projects/projectRouter.js', './api/resources/resourceRouter.js', './api/tasks/taskRouter.js']
}


const specs = swaggerJsDoc(options);

server.use('/', swaggerUI.serve, swaggerUI.setup(specs));

server.get('/', (req, res) => {
  res.status(200).send('API for managing projects, resources and tasks is up and running 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️')
})


server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})