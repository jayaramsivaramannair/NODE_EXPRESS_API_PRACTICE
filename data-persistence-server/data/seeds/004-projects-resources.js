
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects_resources').truncate().insert([
    {'project-id': 1, 'resource-id': 1},
    {'project-id': 1, 'resource-id': 2},
    {'project-id': 2, 'resource-id': 3},
    {'project-id': 2, 'resource-id': 4},
  ]);
};
