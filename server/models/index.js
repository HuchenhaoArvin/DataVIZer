require('dotenv').config()
const uri = process.env.DB_URI
const mongoose = require('mongoose');

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => console.log(error));



module.exports = mongoose;

