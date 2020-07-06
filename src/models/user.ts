
import { Column, Model, Table, IsEmail, HasMany } from 'sequelize-typescript';
import { Booking } from './booking';

@Table
export class User extends Model<User> {
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

    @HasMany(() => Booking)
    trips: Booking[];
};
