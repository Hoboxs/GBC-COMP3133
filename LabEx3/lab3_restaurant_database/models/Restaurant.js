const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  address: [
    {
      building: {
        type: String,

        trim: true,
      },
      street: {
        type: String,

        trim: true,
      },
      zipcode: {
        type: String,

        trim: true,
      },
    },
  ],
  city: {
    type: String,

    trim: true,
  },
  cuisine: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  restaurant_id: {
    type: Number,
    require: true,
  },
});

const restaurant = mongoose.model("restaurants", RestaurantSchema);

module.exports = restaurant;