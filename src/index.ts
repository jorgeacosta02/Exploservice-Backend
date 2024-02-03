import { sequelize } from "./db";
import app from "./app";
import dotenv from "dotenv";
import { SyncOptions } from 'sequelize';
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

dotenv.config();
const port = process.env.PORT || 5000;

// Definir un modelo para la sincronización de Sequelize
interface ISyncOptions extends SyncOptions {
  force?: boolean;
}

// Sincronizar la base de datos y levantar el servidor
async function main() {
  try {
    // Verificar la conexión a la base de datos
    await sequelize.authenticate();
    console.log("Conexión a la Base de Datos exitosa");

    // Sincronizar la base de datos
    const syncOptions: ISyncOptions = { force: true };
    await sequelize.sync(syncOptions);
    console.log("La base de datos se ha sincronizado correctamente");

  } catch (error) {
    console.error("Error al conectarse a la Base de Datos:", error);
    process.exit(1); // Salir de la aplicación en caso de error
  }
}

main();

// Manejador de errores global para Express
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  console.error("Error en la aplicación:", err);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});















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

