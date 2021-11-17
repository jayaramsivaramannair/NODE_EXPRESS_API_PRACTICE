
exports.up = async function(knex) {
  await knex.schema.createTable('tasks', tbl => {
    tbl.increments('task-id');
    tbl.string('task-description').notNullable();
    tbl.string('task-notes');
    tbl.boolean('task-completed').defaultTo(false);
    tbl.foreign('project-id').references('project-id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
  })

}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks');
};
