
exports.up = async function(knex) {
  await knex.schema.createTable('resources', tbl => {
    tbl.increments('resource-id');
    tbl.string('resource-name').notNullable().unique();
    tbl.string('resource-description')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('resources');
};
