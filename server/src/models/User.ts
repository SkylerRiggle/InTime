import { BeforeCreate, BeforeUpdate, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import Data from "./Data";

@Table
class User extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        unique: true
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING,
    })
    password!: string;

    @HasMany(() => Data)
    dataPoints?: Data[];
}

/**
 * Export model
 */
export default User;