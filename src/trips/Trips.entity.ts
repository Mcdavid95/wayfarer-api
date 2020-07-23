import { Column, Model, Table, ForeignKey, HasMany } from 'sequelize-typescript';
import { Buses } from '../buses/Buses.entity';
import { Bookings } from '../bookings/Bookings.entity';
import { Routes } from '../routes/Routes.entity';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Trips extends Model<Trips> {
    @ForeignKey(() => Buses)
    @Column
    bus_id: number;

    @ForeignKey(() => Routes)
    @Column
    route_id: number;

    @Column
    trip_date: Date;

    @Column
    status: string;

    @Column
    fare: number;

    @HasMany(() => Bookings)
    tickets: Bookings[];
}
