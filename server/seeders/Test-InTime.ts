import bcrypt from 'bcrypt';

/** Model Imports */
import User from "../src/models/User";
import Company from "../src/models/Company";
import Interview from "../src/models/Interview";
import Data from "../src/models/Data";

/** Upstream Seed */
export const up = async () => {
  const users = await User.bulkCreate([{
    username: "Test",
    email: "123@email.com",
    password: bcrypt.hashSync("123", 10)
  }, {
    username: "Test2",
    email: "abc@email.com",
    password: bcrypt.hashSync("abc", 10)
    }]);
  
  const companies = await Company.bulkCreate([{
    name: "Amazoon",
    color: 16750848
  }, {
    name: "FazeBuk",
    color: 4351922
  }]);

  const interviews = await Interview.bulkCreate([{
    eventName: "Software Engineering Internship",
    rollingSum: 5,
    companyId: companies[0].id
  }, {
    eventName: "Quality Assurance",
    rollingSum: 5,
    companyId: companies[0].id
  }, {
    eventName: "Lead Privacy Breacher",
    rollingSum: 5,
    companyId: companies[1].id
  }]);

  await Data.bulkCreate([{
    date: new Date(2010, 5, 12),
    daysSinceApplication: 5,
    responseData: {},
    eventId: interviews[0].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 6, 5),
    daysSinceApplication: 8,
    responseData: {},
    eventId: interviews[0].id,
    userId: users[0].id
  }, {
    date: new Date(2010, 6, 10),
    daysSinceApplication: 11,
    responseData: {},
    eventId: interviews[0].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 8, 3),
    daysSinceApplication: 13,
    responseData: {},
    eventId: interviews[0].id,
    userId: users[0].id
  }, {
    date: new Date(2010, 8, 16),
    daysSinceApplication: 10,
    responseData: {},
    eventId: interviews[0].id,
    userId: users[0].id
  },
    
  {
    date: new Date(2010, 5, 12),
    daysSinceApplication: 24,
    responseData: {},
    eventId: interviews[1].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 6, 5),
    daysSinceApplication: 9,
    responseData: {},
    eventId: interviews[1].id,
    userId: users[0].id
  }, {
    date: new Date(2010, 6, 10),
    daysSinceApplication: 12,
    responseData: {},
    eventId: interviews[1].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 8, 3),
    daysSinceApplication: 19,
    responseData: {},
    eventId: interviews[1].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 8, 16),
    daysSinceApplication: 7,
    responseData: {},
    eventId: interviews[1].id,
    userId: users[0].id
  },
    
  {
    date: new Date(2010, 5, 12),
    daysSinceApplication: 10,
    responseData: {},
    eventId: interviews[2].id,
    userId: users[0].id
  }, {
    date: new Date(2010, 6, 5),
    daysSinceApplication: 10,
    responseData: {},
    eventId: interviews[2].id,
    userId: users[0].id
  }, {
    date: new Date(2010, 6, 10),
    daysSinceApplication: 4,
    responseData: {},
    eventId: interviews[2].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 8, 3),
    daysSinceApplication: 12,
    responseData: {},
    eventId: interviews[2].id,
    userId: users[1].id
  }, {
    date: new Date(2010, 8, 16),
    daysSinceApplication: 14,
    responseData: {},
    eventId: interviews[2].id,
    userId: users[1].id
  }]);
}

/** Downstream Seed */
export const down = async () => {
  await Data.destroy({ where: {}, cascade: true, truncate: true });
  await Company.destroy({ where: {}, cascade: true, truncate: true });
  await Interview.destroy({ where: {}, cascade: true, truncate: true });
  await User.destroy({ where: {}, cascade: true, truncate: true });
}
