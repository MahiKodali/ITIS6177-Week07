const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say', (request, response) => {
    const url = 'https://b793u53e1b.execute-api.us-east-1.amazonaws.com/Stage-1/itis6177-resource' + '?keyword=' + req.query.keyword;
    axios.get(url)
        .then((resp) => {
            response.send(resp.data.body);
        })
        .catch(err => {
            console.log(err.message);
        });
});

app.listen(port, () => {
    console.log(`The app is running at ${port}`);
});