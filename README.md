# iris-api
Api prueba tecnica iris to do list


Version de Node utilizada 18.13.0

Version de npm utilizada 8.19.3

Paso a paso para la ejecución del proyecto:

1. Creación de bd: ejecutar o crear desde cero una bd en postresql con el nombre bdiris y configurar la conexión en el archivo src\infrastructure\ORM\config\config.json y de la misma forma en el archivo src\infrastructure\ORM\models\index.js.
2. Ingresar a la terminal en la raiz del proyecto y ejecutar el comando npm install.
3. Ejecutar el comando npx sequelize-cli db:migrate, este comando llevara a cabo el mapeo y la migración de la tablas en la bd.
4. Ejecutar el comando npm run start para levantar la app.
5. En la carpeta src\docs se encuentra la colección de postman la cual cuenta con los request para el consumo del api.
6. En el siguiente link se encuentra la documentación de la api https://documenter.getpostman.com/view/21586730/2s9YeG5BLL


En en siguiente drive se encuentra el video con una pequeña explicación sobre la configuración y funcionamiento de los proyectos https://drive.google.com/file/d/1Uvd63mgBLRv1nASascnWuWIJQE_yZEaG/view?usp=drive_link
