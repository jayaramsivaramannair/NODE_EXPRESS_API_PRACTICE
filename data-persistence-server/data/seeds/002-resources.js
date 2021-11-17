
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // We will remove all the existing data before seeding
  // Truncate will help us reset the primary key each time
  await knex('resources').truncate().insert([
    {'resource-name': 'Frodo', 'resource-description': 'Only a Hobbit can destroy the one ring'},
    {'resource-name': 'One Ring', 'resource-description': 'The one ring worn by Sauron'},
    {'resource-name': 'Bilbo', 'resource-description': 'A Hobbit cannot be recognized by the dragon'},
    {'resource-name': 'Key', 'resource-description': 'The key which unlocks the door to Mount Erebor'},
  ]);
};
