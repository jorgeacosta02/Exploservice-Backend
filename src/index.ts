import { sequelize } from "./db"; // Ajusta la ruta si es necesario
import app from "./app"; // Ajusta la ruta si es necesario
import dotenv from "dotenv";
const port = process.env.PORT || 5000;
import './models/TaskModel'
// import dataBase from "./helpers/baseDeDatos";

dotenv.config();

// Sincronizar la base de datos y levantar el servidor

async function main () {
  try {
    await sequelize.sync({ force: true })
      .then(() => console.log("La base de datos se ha sincronizado correctamente"))
    await sequelize.authenticate();
    console.log("Conexión a Base de Datos exitosa");
    app.listen(port, () => {
      console.log(`Holasssss Server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error al conectarse a la Base de Datos:", error);
  }
}

main();















// index.ts
// import { sequelize } from "./db"; // Ajusta la ruta si es necesario
// import app from "./app"; // Ajusta la ruta si es necesario
// import dotenv from "dotenv";
// const port = process.env.PORT || 3003;
// import { sequelize } from './db';
// import app from './app';
// // import UserModel from './models/UserModel';
// // import ProjectModel from './models/ProjectModel';
// dotenv.config()
// // Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('.');
//     app.listen(port, () => {
//             console.log(`Holasssss Server listening on port ${port}`);
//           });
//     // Puedes comenzar a usar tus modelos aquí
//   })
//   .catch((err) => console.error('Error synchronizing the database:', err));

// // app.listen('3001', () => {
// //   console.log('app listening on port 3001')
// // })

