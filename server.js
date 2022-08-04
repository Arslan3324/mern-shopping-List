const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


//Body Parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(4000, () => {
    console.log('Server started on port 4000');
});