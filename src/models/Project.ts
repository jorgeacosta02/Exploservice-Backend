// models/Project.ts
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
import User from './User';

@Table({ tableName: 'projects' })
class Project extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4) // Asigna un valor por defecto (UUIDv4 en este caso)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id!: string;

  @Column
  projectName!: string;

  @ForeignKey(() => User)
  @Column
  userId!: string;

  @BelongsTo(() => User)
  user!: User;
}

export default Project;
