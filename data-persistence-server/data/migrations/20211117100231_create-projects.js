
exports.up = async function(knex) {
  await knex.schema.createTable('projects', tbl => {
    tbl.increments('project-id');
    tbl.string('project-name').notNullable();
    tbl.string('project-description');
    tbl.boolean('project-completed').defaultTo(false);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects');
};
