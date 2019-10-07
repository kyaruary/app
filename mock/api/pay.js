const router = require('express').Router();


router.post('/inject', (req, res) => {
    const { password, ph } = req.body;
    if (password === '123456') {
        res.send({ code: 0, data: { ph } })
    } else {
        res.send({ code: 1 })
    }
});
router.post('/release', (req, res) => {
    const password = req.body.password;
    if (password === '123456') {
        res.send({ code: 0 })
    } else {
        res.send({ code: 1 })
    }
});

module.exports = router;