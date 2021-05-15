const express = require("express");
const app= express();
const router= require('./routes/post-routes')
const {access}=require('./controllers/access');
const bodyParser = require("body-parser");

require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/uploads', express.static('uploads'));
app.use('/api/', access, router);

const PORTS= process.env.PORT || 3000

app.listen(PORTS, ()=>console.log(`Listening on PORT ${PORTS}`))