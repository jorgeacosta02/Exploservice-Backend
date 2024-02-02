// db.ts
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env

// Configuración de la conexión a la base de datos
export const sequelize = new Sequelize({
  database: 'exploservice',
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  dialect: 'postgres',
  models: [__dirname + '/models/*.ts'], // Ruta a tus modelos
});

// Probar la conexión
sequelize.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database:', err));
