const router = require('express').Router();


router.get('/', (req, res) => {
    res.send({
        code: 0,
        data: 10000.2556
    });
});

module.exports = router;