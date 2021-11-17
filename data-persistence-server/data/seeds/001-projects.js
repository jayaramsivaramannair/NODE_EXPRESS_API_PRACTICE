
exports.seed = async function(knex) {
  // We will remove all the existing data before seeding
  // Truncate will help us reset the primary key each time
      await knex('projects').truncate().insert([
        {'project-name': 'Destroy The One Ring', 'project-description': 'Take the One Ring to Mount Doom', 'project-completed': true },
        {'project-name': 'Kill Smaug the Magnificient', 'project-description': 'Find a Hobbit to kill the dragon - Smaug', 'project-completed': true },
      ]);
};
