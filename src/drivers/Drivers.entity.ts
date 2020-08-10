import { Column, Model, Table, ForeignKey, DataType, Default } from 'sequelize-typescript';
import { Users } from '../users/Users.entity';
import { DriverCredentials } from './driver.interface';

@Table({
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})
export class Drivers extends Model<Drivers> {
  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @Column(DataType.JSONB)
  credentials: DriverCredentials;

  @Default(false)
  @Column
  is_approved: boolean;
}