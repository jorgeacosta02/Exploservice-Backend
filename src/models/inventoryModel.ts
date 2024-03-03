import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
  DataType
} from 'sequelize-typescript';
import { ArticleModel } from './articleModel';
import { LocationModel } from './locationModel';

@Table({ tableName: 'inventory' })
export class InventoryModel extends Model<InventoryModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    amount!: number;

    @ForeignKey(() => ArticleModel)
    @Column({ type: DataType.UUID, allowNull: false })
    articleId!: any;

    @ForeignKey(() => LocationModel)
    @Column({ type: DataType.UUID, allowNull: false })
    locationId!: any;

    @BelongsTo(() => ArticleModel)
    article!: ArticleModel;

    @BelongsTo(() => LocationModel)
    location!: LocationModel;
}































// import {
//     Model,
//     Column,
//     Table,
//     PrimaryKey,
//     Default,
//     DataType,
//     ForeignKey,
//     BelongsTo,
// } from 'sequelize-typescript';
//   import { ArticleModel } from './articleModel';
//   import { LocationModel } from './locationModel';
  
//   @Table({ tableName: 'inventory' })
//   export class InventoryModel extends Model {
//     @PrimaryKey
//     @Default(DataType.UUIDV4)
//     @Column({
//       type: DataType.UUID,
//       defaultValue: DataType.UUIDV4,
//       allowNull: false,
//     })
//     id!: any;
  
//     @Column
//     amount!: number;
  
//     @ForeignKey(() => ArticleModel)
//     @Column({
//       type: DataType.UUID,
//       allowNull: false,
//     })
//     productId!: any;
  
//     @ForeignKey(() => LocationModel)
//     @Column({
//       type: DataType.UUID,
//       allowNull: false,
//     })
//     locationId!: any;
  
//     @BelongsTo(() => ArticleModel)
//     product!: ArticleModel;
  
//     @BelongsTo(() => LocationModel)
//     warehouse!: LocationModel;
//   }