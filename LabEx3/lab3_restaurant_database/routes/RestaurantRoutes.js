const express = require('express');
const restModel = require('../models/Restaurant.js');
const app = express();

app.get("/restaurants", async (req, res) => {
  if (!req.query.sortBy) {
    const restaurants = await restModel.find({});

    try {
      res.send(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    if (req.query.sortBy == "ASC") {
      const restaurants = await restModel
                                    .find({})
                                    .select("_id cuisine name city restaurant_id")
                                    .sort({ restaurant_id: 1 });
      try {
        res.send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      const restaurants = await restModel
                                      .find({})
                                      .select("_id cuisine name city restaurant_id")
                                      .sort({ restaurant_id: -1 });
      try {
        res.send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
});


app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  const restaurants = await restModel.find({
    cuisine: req.params.cuisine,
  });
  try {
    res.send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/restaurants/Delicatessen", async (req, res) => {
  const restaurants = await restModel
    .find({ cuisine: "Delicatessen" })
    .where({ city: { $ne: "Brooklyn" } })
    .select("cuisine name city -_id")
    .sort({ name: 1 });

  try {
    res.send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app