const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({
    boardOf: {
      $gt: req.body.currentMentor - 1,
      $lt: req.body.currentMentor + 4,
    },
  });
  res.status(200).json({
    status: "success",
    theBoys: {
      users,
    },
  });
});

exports.getSpecificYear = catchAsync(async (req, res, next) => {
  const users = await User.find({ boardOf: req.body.boardOf });
  res.status(200).json({
    status: "success",
    theBoys: {
      users,
    },
  });
});
