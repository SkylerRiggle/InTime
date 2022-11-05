module.exports = class DataPointDTO {
  dataPointId;
  userId;
  daysAfterApplication;
  date;
  eventId;

  constructor(dataPointId, userId, eventId, daysAfterApplication, date) {
    this.dataPointId = dataPointId;
    this.userId = userId;
    this.eventId = eventId;
    this.daysAfterApplication = daysAfterApplication;
    this.date = date;
  }
};
