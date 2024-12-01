const { Task, TaskSchema } = require('./task.model');

function setupModels(sequelize) {
  Task.init(TaskSchema, Task.config(sequelize));

  Task.associate(sequelize.models);

  console.log('Models setup successfully');
}

module.exports = setupModels;
