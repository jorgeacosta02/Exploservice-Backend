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
  
  @Table({ tableName: 'inventory_movements' })
  export class InventoryMovementModel extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
    })
    id!: any;
  
    @Column({
      type: DataType.ENUM('entrada', 'salida', 'transferencia'),
      allowNull: false,
    })
    movementType!: 'entrada' | 'salida' | 'transferencia';
  
    @Column
    quantity!: number;
  
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
    originWarehouseId!: any;
  
    @ForeignKey(() => LocationModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    destinationWarehouseId!: any;
  
    @BelongsTo(() => ArticleModel)
    product!: ArticleModel;
  
    @BelongsTo(() => LocationModel, { as: 'originWarehouse' })
    originWarehouse!: LocationModel;
  
    @BelongsTo(() => LocationModel, { as: 'destinationWarehouse' })
    destinationWarehouse!: LocationModel;
  }