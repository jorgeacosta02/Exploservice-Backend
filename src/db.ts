// De Chat gpt

// src/db.ts
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { TaskModel } from './models/TaskModel'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'exploservice',
  models: [UserModel, TaskModel],
});

// UserModel.hasMany(TaskModel, { foreignKey: 'userId' });
// TaskModel.belongsTo(UserModel, { foreignKey: 'userId' });

sequelize.sync();

export default sequelize;















// // DE CraftBeer

// import dotenv from "dotenv";
// dotenv.config();
// import { Sequelize } from "sequelize";
// import fs from "fs";
// import path from "path";

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, ENVIRONMENT } = process.env;

// const sequelize = new Sequelize( ENVIRONMENT==="dev"?
//   `postgres://${DB_USER}:admin@${DB_HOST}/craftbeer`:`${DB_DEPLOY}`,
//   {
//     logging: false,
//     native: false,
//   }
// );

// const basename = path.basename(__filename);

// const modelDefiners: Array<(sequelize: Sequelize) => void> = [];

// fs.readdirSync(path.join(__dirname, "models"))
//   .filter(
//     (file) =>
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
//   )
//   .forEach((file) => {
//     const modelDefiner = require(path.join(__dirname, "models", file));
//     modelDefiners.push(modelDefiner.default);
//   });

//   Promise.all(modelDefiners.map(modelDefiner => modelDefiner(sequelize)));

//   console.log(modelDefiners)

// const upperCaseModels: Record<string, any> = {};
// Object.entries(sequelize.models).forEach(([name, model]) => {
//   const upperCaseName = name[0].toUpperCase() + name.slice(1);
//   upperCaseModels[upperCaseName] = model;
// });

// console.log(upperCaseModels)

// // relacionamos
// const { UserModel, TaskModel} = upperCaseModels; 

// console.log('UserModel in db: ', UserModel);
// // UserModel.hasMany(TaskModel)
// // UserPerson.hasMany(Qualification)

// // UserCompany.hasMany(Product)

// // Product.hasMany(Qualification)
// // Product.hasMany(Item)
// // Product.belongsToMany(UserPerson,{through:"Favorite"})
// // UserPerson.belongsToMany(Product,{through:"Favorite"})

// // ShoppingHistory.hasMany(Item)



// export { UserModel, TaskModel, sequelize}























// import { Sequelize } from 'sequelize-typescript';
// import UserModel from './models/UserModel';
// import TaskModel from './models/TaskModel';
// import dotenv from 'dotenv';

// dotenv.config();

// console.log('db al inicio');

// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// console.log(DB_HOST, DB_USER, DB_PASSWORD)
// // Configuración de la conexión a la base de datos
// export const sequelize = new Sequelize({
//   database: 'exploservice',
//   username: 'postgres',
//   password: 'admin',
//   host: 'localhost:5432',
//   dialect: 'postgres',
//   models: [UserModel, TaskModel], // Lista de modelos
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

// export { UserModel, TaskModel};












// import { Sequelize } from 'sequelize-typescript';
// // import userModel from './models/UserModel';
// // import taskModel from './models/TaskModel';
// import dotenv from 'dotenv';
// import fs from 'fs';
// import path from 'path';

// dotenv.config();

// console.log('db al inicio');

// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


// export const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
//     {
//       logging: false,
//       native: false,
//     }
// );


// // Configuración de la conexión a la base de datos
// const basename = path.basename(__filename);

// const modelDefiners: any = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     const modelDefiner = require(path.join(__dirname, '/models', file));
//     modelDefiners.push(modelDefiner);
//   });

// modelDefiners.forEach((model: (sequelize: Sequelize) => void) => {
//   model(sequelize);
// });

// const { UserModel, TaskModel } = sequelize.models;








// export { UserModel,TaskModel};








// Base Videogames 


// import dotenv from 'dotenv';
// const { Sequelize } = require('sequelize');
// // const fs = require('fs');
// // const path = require('path');
// import UserModel from "./models/UserModel";
// import TaskModel from "./models/TaskModel";

// dotenv.config();



// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY} = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
//     {
//       logging: false,
//       native: false,
//     }
// );

// // const sequelize = new Sequelize(DB_DEPLOY, {
// //   logging: false,
// //   native: false,
// //   dialectOptions:{
// //     // ssl:{
// //     //   require: true,
// //     // },
// //   },
// // });




// // Parge comentada:
// // const basename = path.basename(__filename);

// // const modelDefiners: any[] = [];


// // fs.readdirSync(path.join(__dirname, '/models'))
// //   .filter((file: any) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
// //   .forEach((file: any) => {
// //     modelDefiners.push(require(path.join(__dirname, '/models', file)));
// //   });

// // modelDefiners.forEach(model => model(sequelize));
// // let entries = Object.entries(sequelize.models);
// // let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// // sequelize.models = Object.fromEntries(capsEntries);

// // const { UserModel, TaskModel } = sequelize.models;

// // Videogame.belongsToMany(Genre, { 
// //   through: 'videogame_genre', 
// //   timestamps:false,
// // });

// // Genre.belongsToMany(Videogame, { 
// //   through: 'videogame_genre', 
// //   timestamps:false,
// // });

// // export = {
// //   ...sequelize.models,
// //   conn: sequelize,
// // };

// export { UserModel, TaskModel, sequelize}
