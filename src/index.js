const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./config/routes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)
app.listen(4000, () => {
    console.log('listening at http:/localhost:4000');
});
