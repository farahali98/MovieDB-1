// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
    res.send('ok');
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
app.get('/test', (req, res) => res.send({ status: 200, message: "ok" }))



const mydate = new Date();
const time = mydate.getHours() + ":" + mydate.getMinutes();
app.get('/time', function(req, res) {

    res.send({ status: 200, message: time });
});

app.get('/hello/:ID', (req, res) => {
    user_id = req.params;
    res.send({ status: 200, message: "Hello, " + user_id.ID })
})
app.get('/search', (req, res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        // Search string applied
        const response = {
            status: 200,
            message: "ok",
            data: search
        };

        res.send(response);
    } else {
        const response = {
            status: 500,
            error: true,
            message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});