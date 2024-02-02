// models/User.ts
import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
class User extends Model {
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
  @Column
  dni!: number;
  @Column
  phone!: number;
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

export default User;
