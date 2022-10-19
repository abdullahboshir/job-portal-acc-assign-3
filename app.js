const express = require('express');
const app = express();
const cors = require('cors');

// middle ware 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Route is working fine')
});


const jobRoute = require('./routes/job.route');
const userRoute = require('./routes/user.route');


app.use('/', jobRoute);
app.use('/', userRoute);



module.exports = app;