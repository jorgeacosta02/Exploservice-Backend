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
import { LocationModel } from './locationModel'; // Asegúrate de importar el modelo de ubicación

@Table({ tableName: 'element' })
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
  amount!: number;

  @ForeignKey(() => LocationModel) // Define la clave foránea
  @Column({
    type: DataType.UUID, // Especifica manualmente el tipo de datos para locationId
    allowNull: false,
  })
  locationId!: any;

  @BelongsTo(() => LocationModel)
  location!: LocationModel;
}
