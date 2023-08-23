const  express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');




dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const app = express();



app.get('/test', (req, res) => {
    res.json('test ok')
})


app.post('/register', (req, res) => {

})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})



