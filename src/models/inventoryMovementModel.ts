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
  
  @Table({ tableName: 'inventorymovements' })
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
      type: DataType.ENUM('Entrada', 'Salida', 'Transferencia'),
      allowNull: false,
    })
    movementType!: 'Entrada' | 'Salida' | 'Transferencia';
  
    @Column
    quantity!: number;
  
    @ForeignKey(() => ArticleModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    articleId!: any;
  
    @ForeignKey(() => LocationModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    originLocationId!: any;
  
    @ForeignKey(() => LocationModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    destinationLocationId!: any;
  
    @BelongsTo(() => ArticleModel)
    product!: ArticleModel;
  
    @BelongsTo(() => LocationModel, { as: 'originWarehouse' })
    originWarehouse!: LocationModel;
  
    @BelongsTo(() => LocationModel, { as: 'destinationWarehouse' })
    destinationWarehouse!: LocationModel;
  }