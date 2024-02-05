import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { TaskModel } from './models/TaskModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'exploservice',
  models: [UserModel, TaskModel],
});

export default sequelize;