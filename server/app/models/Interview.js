module.exports = (sequelize, Sequelize) => {
    const Interview = sequelize.define("Interview", {
        eventName: {
            type: Sequelize.STRING
        },
        rollingSum: {
            type: Sequelize.INTEGER
        },
    });

    return Interview;
}