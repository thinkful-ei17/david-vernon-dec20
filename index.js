const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(morgan('dev'));
app.use(express.static('public')); // serve static files
app.use(bodyParser.json()); // parse JSON body
app.use(cors());

// Listening for: GET /items
app.get('/items', (req, res) => {
    const query = req.query; // ?name=buy%20milk ==> {name: "Buy Milk"}
    const list = items.find(query);
    res.json(list);
});



app.use(function (req, res) {
    res.status(404).json({ message: 'Not Found' });
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
});

app.listen(8080, function () {
    console.info(`Server listening on ${this.address().port}`);
}).on('error', console.error);
