const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
Employees = require('./models/employees');

// REPLACE WITH YOUR URI !!!
const uri = "mongodb+srv://<username>:<password>@test-byvi5.mongodb.net/test?retryWrites=true&w=majority"

// mongoose setup
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connected ...")
  })
  .catch(err => console.log(err))
mongoose.set('useFindAndModify', false);
// db connect
const db = mongoose.connection;

// app setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route setup
app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/employees', (req, res) => { 
    Employees.getEmployees((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
})

app.get('/api/employee/:id', (req, res) => {
    Employees.getEmployeeById(req.params.id,(err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
});

app.post('/api/employees', (req, res) => {
    const employee = req.body;
    Employees.createEmployee(employee, (err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
});


app.put('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    const employee = req.body;
     // by default findOneAndUpdate returns original document. { new: true } returns updated one.
    Employees.updateEmployee(id, employee, {new: true}, (err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
})

app.delete('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    Employees.deleteEmployee(id, (err, employee) => {
        if (err) {
            throw err;
        }
        res.json(employee);
    })
})

app.listen(5000, console.log('Running on port 5000...'));

