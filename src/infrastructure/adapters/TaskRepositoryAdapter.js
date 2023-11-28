const TaskRepository = require('../../domain/repositories/TaskRepository');
const { Task } = require('../ORM/models');

class TaskRepositoryAdapter extends TaskRepository {
  async save(taskData) {
    try {
      const newTask = await Task.create(taskData);
      return newTask.toJSON();
    } catch (error) {
      throw error;
    }
  }

  async update(taskData) {
    try {
      return await Task.update({completed: taskData.completed},{ where: { id: taskData.id }});
    } catch (error) {
      throw error;
    }
  }

  async delete(taskId) {
    try {
      return await Task.destroy({
        where: {
          id: taskId
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const tasks = await Task.findAll();
      return tasks.map(task => task.toJSON());
    } catch (error) {
      throw error;
    }
  }

  async getById(taskId) {
    try {
      const task = await Task.findByPk(taskId);
      return task ? task.toJSON() : null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TaskRepositoryAdapter;
