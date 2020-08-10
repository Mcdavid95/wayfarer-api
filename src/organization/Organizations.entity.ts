import { Column, Model, Table, ForeignKey, DataType } from 'sequelize-typescript';
import { Users } from '../users/Users.entity';

@Table({
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})
export class Organizations extends Model<Organizations> {
  @ForeignKey(() => Users)
  @Column
  owner_id: number;

  @Column(DataType.STRING)
  name: string;
}