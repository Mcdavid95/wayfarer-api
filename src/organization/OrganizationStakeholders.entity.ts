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
  user_id: number;

  @ForeignKey(() => Organizations)
  @Column
  organization_id: number;

  @Column(DataType.STRING)
  role: string;
}