
import { Column, Model, Table, IsEmail, HasMany, Unique } from 'sequelize-typescript';
import { Bookings } from '../bookings/Bookings.entity';
@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Users extends Model<Users> {
    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    phone: string;

    @IsEmail
    @Unique
    @Column
    email: string;

    @Column
    password: string;
    
    @Column({ defaultValue: false })
    is_admin: boolean;

    @HasMany(() => Bookings)
    trips: Bookings[];
};
