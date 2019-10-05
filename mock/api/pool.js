const router = require('express').Router();


router.get('/', (req, res) => {
    const data = {
        total: 200000,
        rest: 123456
    }
    res.send({
        code: 0,
        data
    });
});

module.exports = router;