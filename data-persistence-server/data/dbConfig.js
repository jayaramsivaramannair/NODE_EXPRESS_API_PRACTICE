const knex = require('knex');
//Configurations will come from the knexfile.js
const configurations = require('../knexfile.js');


//Pick up the environment variable based on where it is run
const environment = process.env.NODE_ENV || 'development';


module.exports = knex(configurations[environment]);