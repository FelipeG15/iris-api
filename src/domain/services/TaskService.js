const Task = require("../entities/Task");

class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async completeTask(taskId) {
    try {
      const task = new Task(await this.taskRepository.getById(taskId));

      if (!task) {
        throw new Error('Tarea ' + taskId + ' no encontrada');
      }

      task.markAsCompleted();

      await this.taskRepository.update(task); 

      return task;
    } catch (error) {
      throw error;
    }
  }
}
  
module.exports = TaskService;
  