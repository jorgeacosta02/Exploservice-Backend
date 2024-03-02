import {
    Model,
    Column,
    Table,
    PrimaryKey,
    Default,
    DataType,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { ArticleModel } from './articleModel';
  import { LocationModel } from './locationModel';
  
  @Table({ tableName: 'inventory' })
  export class InventoryModel extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
    })
    id!: any;
  
    @Column
    amount!: number;
  
    @ForeignKey(() => ArticleModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    productId!: any;
  
    @ForeignKey(() => LocationModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    warehouseId!: any;
  
    @BelongsTo(() => ArticleModel)
    product!: ArticleModel;
  
    @BelongsTo(() => LocationModel)
    warehouse!: LocationModel;
  }