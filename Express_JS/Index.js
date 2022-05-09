//Third Party Module

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const uuid = require('uuid');


//Body-parser

app.use(express.json());

//Middleware
app.use(morgan('dev'));

const myPersons = [
    {
        id: uuid.v4(),
        name: 'Sathish',
        age: 31 
    },
    {
        id: uuid.v4(),
        name: 'Jenifer',
        age: 30
    },
    {
        id: uuid.v4(),
        name: 'Keerthana',
        age: 30
    }
]

//GetAllPersons
app.get('/', (req, res) => {
    res.status(200).json(myPersons);
});

//GetById
app.get('/:id', async (req, res) => {
    //res.json(req.params.id);
    const getOne = await myPersons.filter(e =>  e.id === req.params.id)
        res.status(200).json(getOne)
    });

    //PostPersons
app.post('/', async (req, res) => {
    myPersons.push(req.body);
    res.status(200).json(req.body);
    });

//LocalHost

app.listen(2000, () => {
    console.log('Server Started on 2000');
});

//DB SERVER CREATION
//mongoose.set('useNewUrlParse', true);
//mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/climate', (err) => {
    if(err) {console.log("DB not Connected")}
    console.log('DB connected successfully');
});

