const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const color = require('colors');
const app = require('./app');



const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.phbgpqx.mongodb.net/${process.env.DB_COLL}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() =>  {
    console.log('mongodb connection is successful'.bold.yellow)
}).catch((error) => console.log('mongodb connection is failed').bold.red);



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`.bold.yellow);
});