import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';
import { Trip } from './trip';
import { User } from './user';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Booking extends Model<Booking> {
    @ForeignKey(() => Trip)
    @Column
    trip_id: number;

    @Column
    origin: string;

    @Column
    destination: string;

    @Column
    trip_date: Date;

    @Column
    status: string;

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @Column(DataType.JSONB)
    seats: string; // actually a jsonb column
}
