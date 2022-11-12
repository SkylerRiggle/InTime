import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
class User extends Model {
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
}

/**
 * Export model
 */
export default User;