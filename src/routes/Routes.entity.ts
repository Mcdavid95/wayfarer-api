import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Routes extends Model<Routes> {

    @Column
    origin: string;

    @Column
    destination: string;
}
