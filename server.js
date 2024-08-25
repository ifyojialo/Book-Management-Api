const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bookRoutes = require('./router/routes')



//connect to db
mongoose.connect(process.env.MONGO_DB)
    .then(() =>{
        app.listen(port, (req, res) =>{
            console.log(`server is listening on ${port}`);
        })
    })
    .catch((error) =>{
        console.log(error);
    })

//Middleware
app.use(cors);
app.use('/api', bookRoutes);


//listen to server
const port = process.env.PORT || 5001;
