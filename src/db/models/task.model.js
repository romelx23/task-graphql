const { Model, DataTypes, Sequelize } = require('sequelize');

const TaskSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  }
}

const TASK_TABLE = 'tasks';

class Task extends Model {

  static associate(models) { // eslint-disable-line
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_TABLE,
      modelName: 'Task',
      timestamps: true
    }
  }
}

module.exports = { Task, TaskSchema, TASK_TABLE };
