const TaskService = require('../services/task.service');

const service = new TaskService();

const getTask = async (_, { id }) => {
  const task = await service.findOne(id);
  return task;
};

const getTasks = () => {
  return service.find({});
};

const addTask = (_, { dto }) => {
  return service.create(dto);
};

const updateTask = (_, { id, dto }) => {
  return service.update(id, dto);
};

const deleteTask = async (_, { id }) => {
  await service.delete(id);
  return id;
};

const getTasksByCategory = async (parent) => {
  const id = parent.dataValues.id;
  return service.findByCategory(id);
};

module.exports = {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  getTasksByCategory
};
