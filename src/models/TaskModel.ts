// import { DataTypes, Model, ModelCtor } from "sequelize";
// import { sequelize } from "../db";
// import UserRole from "../emuns";
// import { UserPersonModelInterface } from "../interfaces/interfaces";


// type TaskModel = Model<UserPersonModelInterface> & {
//   new (): UserPersonModelInterface;
// };

// const defineTaskModel = (): ModelCtor<TaskModel> => {
//   return sequelize.define("taskModel", {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
    
//   }) as ModelCtor<TaskModel>;
// };

// export default defineTaskModel;




















import {
    Model,
    Column,
    Table,
    PrimaryKey,
    Default,
    DataType,
  } from 'sequelize-typescript';
  
  @Table({ tableName: 'tasks' })
  class TaskModel extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
    })
    id!: any;
  
    @Column
    name!: string;
    @Column
    description!: string;
    
  
    // Otros campos y decoradores según tu modelo
  }
  
  export default TaskModel;
  