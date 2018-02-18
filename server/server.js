const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL) 
mongoose.connection.on('connected',() => {
    console.log('MONGO CONNECT SUCCESS')
})
const User = mongoose.model('user',new mongoose.Schema({
    name: {type: String,require: true },
    age: {type: Number,require: true },
}))
User.create({
    name: 'bbb',
    age: 30
},(err,doc) => {
    console.log(err || doc)
})

const app = express()

app.get('/',function (req,res) {
    res.send('<h1>hello express</h1>')
})
app.get('/data',(req,res) => {
    User.find({},(err,doc) => {
        res.json(doc)
    })
})
app.listen(9093,function () {
    console.log('node app start  at port 9093')
})