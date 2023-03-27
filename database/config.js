const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "F4814n69",
  database: "usersdb",
  port: 5432,
  logging: false,
});

module.exports = { db };
