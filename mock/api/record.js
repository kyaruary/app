const router = require('express').Router();


router.get('/release/:id', (req, res) => {
    const data = [];
    res.send(data);
})
router.get('/inject/:id', (req, res) => {
    const data = [{
        release_time: '',
        count: ''
    }];
    res.send(data);
})
router.get('/acceleration_time/:id', (req, res) => {
    const data = [{
        username: '',
        time: ''
    }];
    res.send(data);
})
module.exports = router;