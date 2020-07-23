import { Column, Model, Table, HasMany, Unique, ForeignKey } from 'sequelize-typescript';
import { Trips } from '../trips/Trips.entity';
import { Users } from '..//users/Users.entity';

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

    @ForeignKey(() => Users)
    @Column
    owner_id: number;

    @Column
    model: string;

    @Column
    year: string;

    @Column
    capacity: number;

    @HasMany(() => Trips)
    trips: Trips[];
}
