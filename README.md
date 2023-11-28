# iris-api
Api prueba tecnica iris to do list


Version de Node utilizada 18.13.0

Version de npm utilizada 8.19.3

Paso a paso para la ejecución del proyecto:

1. Creación de bd: ejecutar o crear desde cero una bd en postresql con el nombre bdiris y configurar la conexión en el archivo src\infrastructure\ORM\config\config.json y de la misma forma en el archivo src\infrastructure\ORM\models\index.js.
2. Ingresar a la terminal en la raiz del proyecto y ejecutar el comando npm install.
3. Ejecutar el comando npx sequelize-cli db:migrate, este comando llevara a cabo el mapeo y la migración de la tablas en la bd.
4. Ejecutar el comando npm run start para levantar la app.

