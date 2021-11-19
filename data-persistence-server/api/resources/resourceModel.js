const db = require('../../data/dbConfig.js');

function find() {
  return db('resources')
}


//first() returns the first entry in the db matching the query
function findById(id) {
  return db('resources').where({'resource-id': id}).first();
}


module.exports = {
  find, 
  findById
}