const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase:true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["employee", "technician"],
      default: "employee",
      required: true
    },
    employeeId: {
      type: String,
      required: function () {
        return this.role === "employee";
      },
      unique: true,
      trim: true
    },

    department: {
      type: String,
      required: function () {
        return this.role === "employee";
      },
      enum: [
        "Human Resources",
        "Finance",
        "Marketing",
        "Operations",
        "Information Technology"
      ]
    }
  },
  { timestamps: true },
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
