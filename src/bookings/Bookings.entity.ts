import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Trips } from '../trips/Trips.entity';
import { Users } from '../users/Users.entity';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Bookings extends Model<Bookings> {
    @ForeignKey(() => Trips)
    @Column(DataType.INTEGER)
    trip_id: number;

    @Column(DataType.INTEGER)
    seat_number: number;

    @ForeignKey(() => Users)
    @Column(DataType.INTEGER)
    user_id: number;

    @BelongsTo(() => Users)
    user: Users;

    @BelongsTo(() => Trips)
    trip: Trips;
}
