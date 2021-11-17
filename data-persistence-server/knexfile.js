// Update with your config settings.
module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/project_management.db3'
      },

      //necessary when using sqlite3
      useNullAsDefault: true,

      migrations: {
        directory: './data/migrations'
      }
    },
};
