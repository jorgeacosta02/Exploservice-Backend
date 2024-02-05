// import { DataTypes, Model, ModelCtor } from "sequelize";
// import { sequelize } from "../db";
// import UserRole from "../emuns";
// import { IUserData } from "../interfaces/userInterfaces"; 


// type TUserModel = Model<IUserData> & {
//   new (): IUserData;
// };

// const defineUserModel = (): ModelCtor<TUserModel> => {
//   return sequelize.define("userModel", {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     fistName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     dni: {
//       type: DataTypes.BIGINT,
//       allowNull: true,
//       unique:true,
//     },
//     phone: {
//       type: DataTypes.BIGINT,
//       allowNull: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     position: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     active: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//     },
//     role: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       defaultValue: UserRole.Person, 
//       validate: {
//         isIn: [Object.values(UserRole)], // Asegura que el valor del enum sea válido
//       },
//     },
//   }) as ModelCtor<TUserModel>;
// };

// export default defineUserModel;

















import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column
  firstName!: string;
  @Column
  lastName!: string;
  @Column({
    type: DataType.INTEGER, // Ajusta el tipo según lo que uses para DNI
    allowNull: false,
  })
  dni!: string;
  @Column
  phone!: string;
  @Column
  email!: string;
  @Column
  password!: string;
  @Column
  position!: string;
  @Column
  active!: boolean;
  @Column
  role!: string;

  // Otros campos y decoradores según tu modelo
}


