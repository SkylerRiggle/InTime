import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import Interview from "./Interview";

@Table
class Company extends Model {
    @Column({
        type: DataType.STRING,
        unique: true
    })
    name!: string;

    @Column({
        type: DataType.INTEGER
    })
    color!: number;

    @HasMany(() => Interview)
    interviews?: Interview[];
}

/**
 * Export model
 */
export default Company;