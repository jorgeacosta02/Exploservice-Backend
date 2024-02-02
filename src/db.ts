import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, ENVIRONMENT } = process.env;

const sequelize = new Sequelize( ENVIRONMENT==="dev"?
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/exploservice`:`${DB_DEPLOY}`,
  {
    logging: false,
    native: false,
  }
);

// const basename = path.basename(__filename);

const modelDefiners: Array<(sequelize: Sequelize) => void> = [];

const modelsDir = ENVIRONMENT === "dev" ? "src/models" : "dist/models";
const basename = path.basename(__filename);

fs.readdirSync(path.join(__dirname, modelsDir))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, modelsDir, file));
    modelDefiners.push(modelDefiner.default);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const upperCaseModels: Record<string, any> = {};
Object.entries(sequelize.models).forEach(([name, model]) => {
  const upperCaseName = name[0].toUpperCase() + name.slice(1);
  upperCaseModels[upperCaseName] = model;
});


// relacionamos
const { UserModel, TaskModel} = upperCaseModels; 

// UserPerson.hasMany(ShoppingHistory)
// UserPerson.hasMany(Qualification)

// UserCompany.hasMany(Product)

// Product.hasMany(Qualification)
// Product.hasMany(Item)
// Product.belongsToMany(UserPerson,{through:"Favorite"})
// UserPerson.belongsToMany(Product,{through:"Favorite"})

// ShoppingHistory.hasMany(Item)




export { UserModel, TaskModel, sequelize}






















// import { Sequelize } from 'sequelize-typescript';
// import UserModel from './models/UserModel';
// import ProjectModel from './models/ProjectModel';
// import TaskModel from './models/TaskModel';
// import dotenv from 'dotenv';

// dotenv.config();

// console.log('db al inicio');

// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// // Configuración de la conexión a la base de datos
// export const sequelize = new Sequelize({
//   database: 'exploservice',
//   username: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   dialect: 'postgres',
//   models: [UserModel, ProjectModel, TaskModel], // Lista de modelos
//   define: {
//     // Utiliza UUIDs en lugar de IDs enteros
//     underscored: true,
//     timestamps: true,
//   },
// });

// console.log('DATABASE')
// // Probar la conexión
// // sequelize.authenticate()
// //   .then(() => console.log('Connected to the database'))
// //   .catch((err) => console.error('Error connecting to the database:', err));

// export { UserModel, ProjectModel, TaskModel};