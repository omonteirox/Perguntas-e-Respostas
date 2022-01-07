const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_LOGIN, process.env.DB_PASS, {
  dialect: "mariadb",
  dialectOptions: { connectTimeout: 1000 },
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});


module.exports = connection;
