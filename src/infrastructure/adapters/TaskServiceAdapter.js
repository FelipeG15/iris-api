const TaskService = require('../../domain/services/TaskService');
const SequelizeTaskRepositoryAdapter = require('./TaskRepositoryAdapter');

const taskRepository = new SequelizeTaskRepositoryAdapter();
const taskService = new TaskService(taskRepository);

module.exports = taskService;
