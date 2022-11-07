module.exports = (sequelize, Sequelize) => {
  const DataPoint = sequelize.define("DataPoint", {
    dataId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    eventId: {
      type: Sequelize.INTEGER,
      references: "Interview", //!!must match the name of the Interview table in the actual db
      referencesKey: "event_id", //!!must match the name of the event_id attribute in the actual db
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
