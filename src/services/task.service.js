const boom = require('@hapi/boom');

const { models } = require('../db/sequelize');

class TaskService {

  async create(data) {
    const newTask = await models.Task.create(data);
    console.log({ newTask });
    return newTask;
  }

  async find(query) {
    const options = {
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const tasks = await models.Task.findAll(options);
    return tasks;
  }

  async findOne(id) {
    const task = await models.Task.findByPk(id);
    if (!task) {
      throw boom.notFound('task not found');
    }
    return task;
  }

  async update(id, changes) {
    const task = await this.findOne(id);
    const rta = await task.update(changes);
    return rta;
  }

  async delete(id) {
    const task = await this.findOne(id);
    await task.destroy();
    return { id };
  }

}

module.exports = TaskService;
