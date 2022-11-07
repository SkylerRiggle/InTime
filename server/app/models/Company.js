module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("Company", {
    name: {
      type: Sequelize.STRING,
      primarykey: true,
      unique: true,
    },
    color: {
      type: Sequelize.STRING,
    },
  });

  return Company;
};
