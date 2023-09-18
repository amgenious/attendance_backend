require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors  = require('cors')
var bodyParser = require('body-parser')
//express app
const app = express();


app.set('view engine', 'ejs');
app.set('views');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req,res) => {
    res.send("Am alive")
})

// connection to database
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/', require('./routes/routes'))

app.listen(process.env.PORT || 4000, console.log("Running on port http://localhost:4000"))