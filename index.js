const express = require('express')
const multer = require('multer');
const bodyParser = require('body-parser')
const route = require('./routes/route')
const mongoose = require('mongoose')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use( multer().any())

mongoose.connect("mongodb+srv://Shrikantkhare1:Shrikant@cluster0.qch0g.mongodb.net/client-app", {
        useNewUrlParser: true
    })

.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});