
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate().insert([
    {'task-description': 'Pay a visit to Bilbo', 'task-notes': 'Convince Bilbo to handover the ring', 'task-completed': true, 'project-id': 1},
    {'task-description': 'Inform Frodo about the task', 'task-notes': 'Tell Frodo to the inn of Prancing Pony', 'task-completed': true, 'project-id': 1},
    {'task-description': 'Ask Sam to Accompany Frodo', 'task-notes': 'Tell Sam never to leave Frodo\'s side', 'task-completed': true, 'project-id': 1},
    {'task-description': 'Tell Bilbo about an Adventure', 'task-notes': 'Pique Bilbo\'s interest', 'task-completed': true, 'project-id': 2},
    {'task-description': 'Mark the door for dwarfs', 'task-notes': 'Marking the door will help dwarfs reach Bilbo', 'task-completed': true, 'project-id': 2},
    {'task-description': 'Dwarfs to pay visit the Hobbit', 'task-notes': 'The Hobbit needs to be explained task gravity', 'task-completed': true, 'project-id': 2}
  ]);
};
