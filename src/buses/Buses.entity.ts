import { Column, Model, Table, HasMany, Unique } from 'sequelize-typescript';
import { Trips } from '../trips/Trips.entity';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Buses extends Model<Buses> {
    @Unique
    @Column
    number_plate: string;

    @Column
    manufacturer: string;

    @Column
    model: string;

    @Column
    year: string;

    @Column
    capacity: number;

    @HasMany(() => Trips)
    trips: Trips[];
}
