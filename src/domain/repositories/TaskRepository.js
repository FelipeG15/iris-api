class TaskRepository {
    async save(taskData) {
        throw new Error('Se debe implementar el metodo save()');
    }

    async update(taskData) {
        throw new Error('Se debe implementar el metodo update()');
    }

    async delete(taskId) {
        throw new Error('Se debe implementar el metodo delete()');
    }
  
    async getById(taskId) {
        throw new Error('Se debe implementar el metodo getById()');
    }
  
    async getAll() {
        throw new Error('Se debe implementar el metodo getAll()');
    }
  }
  
  module.exports = TaskRepository;