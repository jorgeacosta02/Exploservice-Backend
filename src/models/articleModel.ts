import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'article' })
export class ArticleModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  
  @Column
  brand!: string;
  
  @Column
  feature1!: string;
  
  @Column
  feature2!: string;

  @Column
  description!: string;
}