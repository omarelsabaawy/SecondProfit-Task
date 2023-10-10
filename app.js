const express = require('express');
const path = require('path');
const ejs = require('ejs');
const { auth } = require('express-openid-connect');

const routes = require('./Routes');
const { config } = require('./Config/authConfig');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(auth(config));

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log("connected on port " + process.env.PORT);
    console.log()
})