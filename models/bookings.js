const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const BookingsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    origin: {
      type: String,
    },
    destination: {
      type: String,
    },
    apertureDate: {
      type: String
    },
    duration: {
      type: Number
    },
  },
  {
    timestamps: true,
  }
);

BookingsSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("bookings", BookingsSchema);
