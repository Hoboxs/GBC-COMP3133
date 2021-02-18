const express = require('express')
const mongoose = require('mongoose')
const User = require('./Users.js')
const userRouter = require("./routes/route.js");

const usersData = require('./UserData.json')

const app = express()
const port = 3000

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

var dbUrl = 'mongodb+srv://Admin:---@cluster0.6v9iz.mongodb.net/gbc-full-stack?retryWrites=true&w=majority'

mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
})

app.use(userRouter)
