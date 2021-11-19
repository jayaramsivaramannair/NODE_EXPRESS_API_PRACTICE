const db = require('../../data/dbConfig.js');

function find() {
  return db('tasks')
  .join('projects','tasks.project-id', 'projects.project-id' )
  .select('tasks.task-id', 
  'tasks.task-description', 
  'tasks.task-notes', 
  'tasks.task-completed', 
  'projects.project-name',
  'projects.project-description')
}


//first() returns the first entry in the db matching the query
function findById(id) {
  return db('tasks')
  .join('projects','tasks.project-id', 'projects.project-id' )
  .select('tasks.task-id', 
  'tasks.task-description', 
  'tasks.task-notes', 
  'tasks.task-completed', 
  'projects.project-name',
  'projects.project-description').where({'task-id': id}).first();
}


module.exports = {
  find, 
  findById
}