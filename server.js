const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/calculate", (req, res) => {
    console.log();
    res.send("The sum of two number is : " + (Number(req.body.num1) + Number(req.body.num2)));
});

app.listen(PORT, () => {
    console.log("Server has started on PORT : ", PORT);
});