const express = require('express');
const app = express();
const cors = require('cors');


// middle ware 
app.use(express.json());
app.use(cors());




app.get('/', (req, res) => {
    res.send('Route is working fine')
});



module.exports = app;