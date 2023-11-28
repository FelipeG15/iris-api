const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const TaskServiceAdapter = require('../../infrastructure/adapters/TaskServiceAdapter');
const TaskRepositoryAdapter = require('../../infrastructure/adapters/TaskRepositoryAdapter');
const TaskManagement = require('../../application/usecases/TaskManagement');
const taskService = require('../../infrastructure/adapters/TaskServiceAdapter');

const taskRepository = new TaskRepositoryAdapter();
const taskManagement = new TaskManagement(TaskServiceAdapter,taskRepository);

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await taskManagement.getAllTask();
    res.json(tasks);
  } catch (error) {
    console.error('Error consultando las tareas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/tasks', [
  body('title').notEmpty().withMessage('El campo title es obligatorio.'),
  body('completed').notEmpty().isBoolean().withMessage('El campo completed no es valido.'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, completed } = req.body;
    const newTask = await taskManagement.addTask({ title, completed });
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/completeTask/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const newTask = await taskService.completeTask(taskId);
        res.status(200).json(newTask);
    } catch (error) {
        console.error('Error update task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const result = await taskManagement.deleteTask(taskId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error update task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  

module.exports = router;