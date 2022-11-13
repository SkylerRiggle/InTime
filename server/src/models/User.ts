import { BeforeCreate, BeforeSave, BeforeUpdate, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import bcrypt from 'bcrypt';
import Data from "./Data";

const saltRounds = 10;
const handleHash = (user: User) => {
    user.password = bcrypt.hashSync(user.password, saltRounds);
}

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

    @HasMany(() => Data)
    dataPoints?: Data[];

    @BeforeUpdate
    static updateHash = (user: User) => handleHash(user);
    @BeforeCreate
    static createHash = (user: User) => handleHash(user);
    @BeforeSave
    static saveHash = (user: User) => handleHash(user);
}

/**
 * Export model
 */
export default User;