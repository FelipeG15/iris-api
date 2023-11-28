const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'admin',
  database: 'dbiris',
  host: 'localhost',
});

const Task = require('./task')(sequelize, DataTypes);

module.exports = {
  Task,
  sequelize,
};
