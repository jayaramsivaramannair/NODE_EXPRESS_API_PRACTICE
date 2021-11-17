
exports.up = async function(knex) {
  await knex.schema.createTable('projects_resources', tbl => {
    tbl.integer('project-id').notNullable().references('project-id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('resource-id').notNullable().references('resource-id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.unique(['project-id', 'resource-id']);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('projects_resources');
};
