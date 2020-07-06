import { Column, Model, Table, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { Bus } from './bus';
import { Booking } from './booking';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Trip extends Model<Trip> {
    @ForeignKey(() => Bus)
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

    @HasMany(() => Booking)
    tickets: Booking[];
}
