module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("Company", {
        name: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.INTEGER
        },
    });

    return Company;
}