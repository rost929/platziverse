"use strict";

const setUpDataBase = require("./lib/db");
const setUpAgentModel = require("./models/agent");
const setUpMetricModel = require("./models/metric");

module.exports = async function (config) {
  const sequelize = setUpDataBase(config);
  const agentModel = setUpAgentModel(config);
  const metricModel = setUpMetricModel(config);

  agentModel.hasMany(MetricModel);
  metricModel.belongsTo(agentModel);

  await sequelize.authenticate();

  const agent = {};
  const metric = {};

  return {
    agent,
    metric,
  };
};
