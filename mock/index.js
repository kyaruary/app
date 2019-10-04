const express = require('express');
const app = new express();
const api = require('./api');
const cors = require('express-cors');
app.use(cors({
    allowedOrigins: ['*', 'localhost:8080', "127.0.0.1:*"]
}))
app.use(express.urlencoded());
app.use(express.json());
app.use(api);
app.listen(3000, () => {
    console.log('api server is running on port 3000..')
})