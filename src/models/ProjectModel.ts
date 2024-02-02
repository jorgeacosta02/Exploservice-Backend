import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';
import UserModel from './UserModel';

@Table({ tableName: 'projects' })
class ProjectModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4) // Asigna un valor por defecto (UUIDv4 en este caso)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id!: string;

  @Column
  projectName!: string;

  @ForeignKey(() => UserModel)
  @Column
  userId!: string;

  @BelongsTo(() => UserModel)
  userModel!: UserModel;
}

export default ProjectModel;
