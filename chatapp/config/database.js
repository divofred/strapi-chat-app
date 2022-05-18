module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "chatapp"),//Name of database
      user: env("DATABASE_USERNAME", "postgres"),//Default username
      password: env("DATABASE_PASSWORD", "12345678"),//Password to your PostgreSQL database
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
