module.exports = class UserDTO {
  userId;
  email;
  password;
  createdAt;
  updatedAt;

  constructor(userId, email, password) {
    this.userId = userId;
    this.email = email;
    this.password = password;
  }

  updateAll(userId, email, password) {
    this.userId = userId;
    this.email = email;
    this.password = password;
  }
  updateId(userId) {
    this.userId = userId;
  }
  updateEmail(email) {
    this.email = email;
  }
  updatePassword(password) {
    this.password = password;
  }
};
