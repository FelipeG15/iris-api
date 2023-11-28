class TaskManagement {
  constructor(taskService,taskRepository) {
    this.taskService = taskService;
    this.taskRepository = taskRepository;
  }

  async getAllTask() {
    try {
        return await this.taskRepository.getAll();
    } catch (error) {
        throw error;
    }
  }

  async addTask({ title, completed }) {
    try {
      const newTask = await this.taskRepository.save({ title, completed });

      return newTask;
    } catch (error) {
      throw error;
    }
  }

  async completedTask(taskId) {
    try {
        await this.taskService.completeTask(taskId);
      } catch (error) {
        throw error;
      }
  }

  async deleteTask(taskId) {
    try {
        await this.taskRepository.delete(taskId);
      } catch (error) {
        throw error;
      }
  }
}

module.exports = TaskManagement;
