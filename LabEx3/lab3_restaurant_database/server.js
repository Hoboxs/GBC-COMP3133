
const express = require('express');
const mongoose = require('mongoose');
const restRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Admin:---@cluster0.6v9iz.mongodb.net/gbc-week04?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server")
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
});

app.use(restRouter);

app.listen(3000, () => { console.log('Server is running...') }); 