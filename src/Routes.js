const express = require('express');
const app = express();
const Schedule = require("./routes/Schedule").router;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/schedule', Schedule);


module.exports = app;