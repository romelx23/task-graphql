const express = require('express');

const TaskService = require('../services/task.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createTaskDto, updateTaskDto, getTaskDto, queryTaskDto } = require('../dtos/task.dto');

const router = express.Router();
const service = new TaskService();

router.get('/',
  validatorHandler(queryTaskDto, 'query'),
  async (req, res, next) => {
    try {
      const tasks = await service.find(req.query);
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getTaskDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await service.findOne(id);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createTaskDto, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTask = await service.create(body);
      res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getTaskDto, 'params'),
  validatorHandler(updateTaskDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const task = await service.update(id, body);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getTaskDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
