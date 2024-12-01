const Joi = require('joi');

const id = Joi.number().integer();
// const name = Joi.string().min(3).max(15);
// const price = Joi.number().integer().min(10);
const description = Joi.string();
// const image = Joi.string().uri();
// const categoryId = Joi.number().integer();

// const price_min = Joi.number().integer();
// const price_max = Joi.number().integer();

// const limit = Joi.number().integer();
// const offset = Joi.number().integer();

const title = Joi.string().min(3).max(50);
const status = Joi.string().valid('pending', 'in-progress', 'completed');
// const color = Joi.string().hex().length(6);
const color = Joi.string().valid('red', 'blue', 'green', 'yellow');
const favorite = Joi.boolean();

const queryTaskDto = Joi.object({
  limit: Joi.number().integer(),
  offset: Joi.number().integer(),
  status: status,
  favorite: favorite,
});

const createTaskDto = Joi.object({
  title: title.required(),
  description: description.required(),
  status: status.required(),
  color: color.required(),
  favorite: favorite.default(false),
});

const updateTaskDto = Joi.object({
  title: title,
  description: description,
  status: status,
  color: color,
  favorite: favorite,
});

const getTaskDto = Joi.object({
  id: id.required(),
});

module.exports = { queryTaskDto,createTaskDto, updateTaskDto, getTaskDto }
