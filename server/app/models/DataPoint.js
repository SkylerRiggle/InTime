module.exports = (sequelize, Sequelize) => {
    const DataPoint = sequelize.define("DataPoint", {
        date: {
            type: Sequelize.DATE
        },
        daysAfterApplication: {
            type: Sequelize.INTEGER
        },
        responseData: {
            type: Sequelize.JSONB
        },
    });

    return DataPoint;
}