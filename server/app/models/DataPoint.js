module.exports = (sequelize, Sequelize) => {
  const DataPoint = sequelize.define("DataPoint", {
    dataId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    eventId: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
    daysAfterApplication: {
      type: Sequelize.INTEGER,
    },
    responseData: {
      type: Sequelize.JSONB,
    },
  });

  return DataPoint;
};
