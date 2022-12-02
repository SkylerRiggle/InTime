import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Interview from "./Interview";
import User from "./User";

@Table
class Data extends Model {
    @Column({
        type: DataType.DATE
    })
    date!: Date;

    @Column({
        type: DataType.INTEGER
    })
    daysSinceApplication!: number;

    @ForeignKey(() => Interview)
    @Column({
        type: DataType.INTEGER
    })
    eventId!: number;

    @BelongsTo(() => Interview)
    interview!: Interview;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}

/**
 * Export model
 */
export default Data;