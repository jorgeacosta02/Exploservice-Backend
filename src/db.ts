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

const basename = path.basename(__filename);

const modelDefiners: Array<(sequelize: Sequelize) => void> = [];

fs.readdirSync(path.join(__dirname, "src/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "src/models", file));
    modelDefiners.push(modelDefiner.default);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const upperCaseModels: Record<string, any> = {};
Object.entries(sequelize.models).forEach(([name, model]) => {
  const upperCaseName = name[0].toUpperCase() + name.slice(1);
  upperCaseModels[upperCaseName] = model;
});


// relacionamos
const { UserModel, ProjectModel, TaskModel} = upperCaseModels; 

// UserPerson.hasMany(ShoppingHistory)
// UserPerson.hasMany(Qualification)

// UserCompany.hasMany(Product)

// Product.hasMany(Qualification)
// Product.hasMany(Item)
// Product.belongsToMany(UserPerson,{through:"Favorite"})
// UserPerson.belongsToMany(Product,{through:"Favorite"})

// ShoppingHistory.hasMany(Item)




export { UserModel, ProjectModel, TaskModel,sequelize}






















// import { Sequelize } from 'sequelize-typescript';
// import dotenv from 'dotenv';
// dotenv.config()

// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST
// } = process.env

// // Configuración de la conexión a la base de datos
// export const sequelize = new Sequelize({
//   database: 'exploservice',
//   username: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   dialect: 'postgres',
//   models: [__dirname + '/models/*.ts'],// Ruta a tus modelos
//   define: {
//     // Utiliza UUIDs en lugar de IDs enteros
//     underscored: true,
//     timestamps: true,
//   },
// });

// // Probar la conexión
// sequelize.authenticate()
//   .then(() => console.log('Connected to the database'))
//   .catch((err) => console.error('Error connecting to the database:', err));
