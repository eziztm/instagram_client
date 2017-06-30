var express = require('express')
var app = express()

var InstagramConfig = require('./config/InstagramConfig')

app.get('/', function (req, res) {
    //Unauthenticated request is redirected to login
    if (typeof (req.header('Authorization')) == 'undefined' || req.header('Authorization') == null) {
        res.redirect('/authenticate');
    }
    else {
        var auth_header = req.header('Authorization');
        var token = auth_header.replace('Bearer', '').trim();

        res.send(InstagramConfig.getSelfInfo(token));
    }

    //res.send('Hello World!')
})

app.get('/authenticate', function (req, res) {
    //If request parameter code doesn't exist redirect to the login page
    if (typeof (req.query.code) == 'undefined' || req.query.code == null) {
        res.redirect(InstagramConfig.loginUrl);
    } else {
        InstagramConfig.authenticate(req.query.code)
            .then(function (response) {
                //res.set('Authorization', 'Bearer ' + response.data.access_token);
                //res.redirect('/');

                res.send(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})


app.get('/selfdata', function (req, res) {
    //Unauthenticated request is redirected to login
    if (typeof (req.header('Authorization')) == 'undefined' || req.header('Authorization') == null) {
        res.status(401).send({ error: 'Unauthorized!' })
    }
    else {
        var auth_header = req.header('Authorization');
        var token = auth_header.replace('Bearer', '').trim();

        console.log(token);

        InstagramConfig.getInfo(token)
            .then(function (response) {
                res.send(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})



app.listen(3000, function () {
    console.log('App listening on port 3000!')
})
