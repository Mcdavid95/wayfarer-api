
import { Column, Model, Table, IsEmail, HasMany } from 'sequelize-typescript';
import { Bookings } from './Bookings';

@Table
export class Users extends Model<Users> {
    @Column
    first_name: string;

    @Column
    last_name: string;

    @IsEmail
    @Column
    email: string;

    @Column
    password: string;
    
    @Column({ defaultValue: false })
    isAdmin: boolean;

    @HasMany(() => Bookings)
    trips: Bookings[];
};
