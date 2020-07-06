import { Column, Model, Table, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { Buses } from './Buses';
import { Bookings } from './Bookings';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Trips extends Model<Trips> {
    @ForeignKey(() => Buses)
    @Column
    bus_id: number;

    @Column
    origin: string;

    @Column
    destination: string;

    @Column
    trip_date: Date;

    @Column
    status: string;

    @Column
    fare: number;

    @Column(DataType.JSONB)
    seats: string; // actually a jsonb column

    @HasMany(() => Bookings)
    tickets: Bookings[];
}
