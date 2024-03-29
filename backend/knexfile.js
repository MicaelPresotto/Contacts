// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "micael123",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/database/migrations",
  },
};
