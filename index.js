require("dotenv").config();
const cors = require('cors');
const express = require('express');
const app = express();
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
app.use(cors());
app.get('/translate', (req, res) => {
    const query = req.query.text
    const source = req.query.source
    const target = req.query.target
    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    var request = require('request');
    var options = {
        url: api_url,
        form: { 'source': source, 'target': target, 'text': query },
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
            console.log(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});
app.listen(4123, function () {
    console.log('http://127.0.0.1:4123/translate app listening on port 3000!');
});