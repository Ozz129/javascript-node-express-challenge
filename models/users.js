const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("users", UserScheme);
