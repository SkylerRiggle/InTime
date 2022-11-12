import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Company from "./Company";
import Data from "./Data";

@Table
class Interview extends Model {
    @Column({
        type: DataType.STRING
    })
    eventName!: string;

    @Column({
        type: DataType.INTEGER
    })
    rollingSum!: number;

    @ForeignKey(() => Company)
    companyId!: number;

    @BelongsTo(() => Company)
    company!: Company;

    @HasMany(() => Data)
    dataPoints?: Data[];
}

/**
 * Export model
 */
export default Interview;