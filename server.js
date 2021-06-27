const { fileLoader } = require('ejs');
const express = require('express');
const fileUpload=require('express-fileupload');
const fs = require('fs')
const { isBuffer } = require('util');
const { error } = require('console');
const http=require('http')
const path=require('path')
const bodyparser=require('body-parser');
const cors = require('cors')

const app=express();
// app.use('/static', express.static('App.js'))
app.use(fileUpload());
//MONGODB
const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/karu', {useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log ('We are connected')
});

app.use(cors());
app.use(express.json())
const fileRouter=require('./routes/file')
app.use('/file',fileRouter)
// step 3: Heroku 
    if (process.env.NODE_ENV === "production"){
      app.use(express.static("build"));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "build", "index.html"));
      });
    }
const port=process.env.PORT || 5000
app.listen( port,()=>console.log(`Server Started...${port}`));