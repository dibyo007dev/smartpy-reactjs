const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middleware 
app.use(bodyParser.json());

var port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});