var express = require("express");
var router = express.Router();

var loginRouter = require("./routes/login.js");
var userRouter = require("./routes/user.js");
var interviewRouter = require("./routes/interview.js");
var companyRouter = require("./routes/company.js");

router.use("/login", loginRouter);
router.use("/user", userRouter);
router.use("/interview", interviewRouter);
router.use("/company", companyRouter);

router.use();

module.exports = router;
