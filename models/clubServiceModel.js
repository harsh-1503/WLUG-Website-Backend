const mongoose = require("mongoose");

const clubServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add Title of CLub Service"],
  },

  presenterName: {
    type: [String],
    required: [true, "Please add Presenter's Name"],
  },
  image: String,
  issuedAt: {
    type: Date,
    default: Date.now,
  },
  detail: {
    type: String,
    // required:[true, "Plz A"]
  },
});
const ClubService = mongoose.model("ClubService", clubServiceSchema);
module.exports = ClubService;
