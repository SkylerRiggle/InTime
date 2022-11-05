module.exports = class DataPointDTO {
  userId;
  daysAfterApplication;
  date;
  eventId;

  constructor(userId, eventId, daysAfterApplication, date) {
    this.userId = userId;
    this.eventId = eventId;
    this.daysAfterApplication = daysAfterApplication;
    this.date = date;
  }
};
