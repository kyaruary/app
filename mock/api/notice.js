const router = require('express').Router();


router.get('/', (req, res) => {
    const data = []
    res.send({
        code: 0,
        data
    });
});

module.exports = router;