import { sequelize } from "./db"; // Ajusta la ruta si es necesario
import app from "./app"; // Ajusta la ruta si es necesario
import dotenv from "dotenv";
const port = process.env.PORT || 3001;
// import dataBase from "./helpers/baseDeDatos";

dotenv.config();

// Sincronizar la base de datos y levantar el servidor
sequelize
  .sync({ force: true })
  .then(() => {
  //  dataBase();
    console.log("Database synchronized");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Error synchronizing database:", error);
  });












// index.ts
// import { sequelize } from './db';
// import app from './app';
// // import UserModel from './models/UserModel';
// // import ProjectModel from './models/ProjectModel';

// // Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Database synchronized.');
//     // Puedes comenzar a usar tus modelos aquí
//   })
//   .catch((err) => console.error('Error synchronizing the database:', err));

// app.listen('3001', () => {
//   console.log('app listening on port 3001')
// })

