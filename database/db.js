const Sequelize = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(process.env.DB_URL,{dialect:"mariadb"})
// const connection = new sequelize(
//   process.env.DB_NAME,
//   process.env.DB_LOGIN,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mariadb",
//     port: process.env.DB_PORT,
//   }
// );

module.exports = connection;
