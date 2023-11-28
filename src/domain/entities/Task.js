class Task {
    constructor({id, title, completed}) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = !this.completed;
    }
}
  
module.exports = Task;