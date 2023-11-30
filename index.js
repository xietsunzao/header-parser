const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
    const ipaddress = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    res.json({ ipaddress, language, software });
});

const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port http://localhost:' + listener.address().port);
});
