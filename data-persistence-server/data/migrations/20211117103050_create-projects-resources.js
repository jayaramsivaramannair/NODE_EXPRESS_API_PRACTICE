
exports.up = async function(knex) {
  await knex.schema.createTable('projects_resources', tbl => {
    tbl.foreign('project-id').references('project-id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.foreign('resource-id').references('resource-id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.unique(['project-id', 'resource-id']);
  })
};

exports.down = async function(knex) {
  await knex.dropTableIfExists('projects_resources');
};
