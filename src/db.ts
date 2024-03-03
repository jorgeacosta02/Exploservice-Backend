import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { TaskModel } from './models/TaskModel';
import { LocationModel } from './models/locationModel';
import { ArticleModel } from './models/articleModel';
import { InventoryModel } from './models/inventoryModel';
import { InventoryMovementModel } from './models/inventoryMovementModel';

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
    ArticleModel,
    InventoryModel,
    InventoryMovementModel
  ],
  logging: false
});

export default sequelize;