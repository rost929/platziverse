'use strict'

const Sequelize = require('sequelize')
const setUpDataBase = require('../lib/db.js')

module.exports = function setUpMetricModel (config) {
  const sequelize = setUpDataBase(config)

  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
