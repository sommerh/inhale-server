const Sequelize = require('sequelize');
const db = require('../db');

const Strategy = db.define('strategy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // inhale: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // },
  // exhale: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // },
  // pauseOne: Sequelize.INTEGER,
  // pauseTwo: Sequelize.INTEGER,
});

module.exports = Strategy;
