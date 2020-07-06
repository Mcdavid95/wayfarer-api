import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Trip } from './trip';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Bus extends Model<Bus> {
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

    @HasMany(() => Trip)
    trips: Trip[];
}
