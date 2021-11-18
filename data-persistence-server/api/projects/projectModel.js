const db = require('../../data/dbConfig.js');

function find() {
  return db('projects')
}


//first() returns the first entry in the db matching the query
function findById(id) {
  return db('projects').where({'project-id': id}).first();
}


module.exports = {
  find, 
  findById
}





