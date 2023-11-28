const express = require('express');
const { sequelize } = require('./src/infrastructure/ORM/models/index');
const TaskController = require('./src/interfaces/controllers/TaskController');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Sincronizar modelos con la base de datos
sequelize.sync().then(() => {
  console.log('BD Conectada');
}).catch((error) => {
  console.error('Error de conexión a la BD:', error);
});

app.use(cors());
app.use(express.json());
app.use('/api', TaskController);

app.listen(PORT, () => {
  console.log(`Run http://localhost:${PORT}`);
});
