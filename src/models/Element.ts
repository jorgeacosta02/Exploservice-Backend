import {
    Model,
    Column,
    Table,
    PrimaryKey,
    Default,
    DataType,
  } from 'sequelize-typescript';
  
  @Table({ tableName: 'tasks' })
  export class ElementModel extends Model {
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
    @Column({
      type: DataType.INTEGER, // Ajusta el tipo según lo que uses para DNI
      allowNull: false,
    })
    amount!: string;
  }
  

  