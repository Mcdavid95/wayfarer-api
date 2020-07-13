import { Column, Model, Table, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { Buses } from './Buses';
import { Bookings } from './Bookings';
import { Seats } from 'src/interfaces/trip.interface';

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

    @Column(DataType.ARRAY(DataType.JSONB))
    seats: Seats[]; // actually a jsonb column

    @HasMany(() => Bookings)
    tickets: Bookings[];
}
