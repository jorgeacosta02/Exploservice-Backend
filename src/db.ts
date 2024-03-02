import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { TaskModel } from './models/TaskModel';
import { LocationModel } from './models/locationModel';
import { ElementModel } from './models/elementModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'exploservice',
  models: [
    UserModel,
    TaskModel,
    LocationModel,
    ElementModel
  ],
});

export default sequelize;