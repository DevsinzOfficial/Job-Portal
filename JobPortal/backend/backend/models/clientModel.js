const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const clientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add last name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    verified: { type: Boolean, default: false, required: true },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    phoneNumber: {
      type: String,
    },
    gender: {
      type: String,
    },
    languages: [
      {
        language: {
          type: String,
        },
        proficiency: {
          type: String,
        },
      },
    ],

    photo: {
      type: String,
    },

    address: {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      streetAddress: {
        type: String,
      },
      province: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

clientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
  }
  next();
});
clientSchema.methods.comparePassword = async function (password) {
  const result = await bcrypt.compareSync(password, this.password);
  return result;
};

module.exports = mongoose.model("Client", clientSchema);
