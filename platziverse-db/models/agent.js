'use strict'

const Sequelize = require('sequelize')
const setUpDataBase = require('../lib/db.js')

module.exports = function setUpAgentModel (config) {
  const sequelize = setUpDataBase(config)

  return sequelize.define('agent', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING,
      allow: false
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
