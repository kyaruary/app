const express = require('express');
const app = new express();
const api = require('./api');
const cors = require('express-cors');
const jwt = require('jsonwebtoken');
app.set('jwt-secret', 'climber');
app.use(cors({
    allowedOrigins: ['*', 'localhost:8080', "127.0.0.1:*"],
    headers: ['Authorization'],
}))
app.use((req, res, next) => {
    console.log(req.method, req.path)
    if (req.path == '/login' || req.path == '/secret') {
        next();
    } else {
        const auth = req.get('Authorization').split('Bearer ')[1];
        jwt.verify(auth, 'climber', function (err, decoded) {
            if (err) {
                console.log(err)
                res.send({ code: 1 })
            } else {
                next();
            }
        });

    }
})
app.use(express.urlencoded());
app.use(express.json());
app.use(api);
app.listen(3000, () => {
    console.log('api server is running on port 3000..')
})