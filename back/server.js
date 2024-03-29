const bodyparser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();

app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

//routes
//app.use('/api/user', userRoutes); 

//server
app.listen(process.env.PORT, () => {
    console.log('Listenning on port ' + process.env.PORT)
});