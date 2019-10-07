const router = require('express').Router();


router.get('/', (req, res) => {
    const data = [];
    let i = 10;
    while (i--) {
        data.push({
            question: '问题' + i,
            answer: '回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复' + i,
            state: i % 2
        })
    }
    res.send({ code: 0, data });
});

router.post('/', (req, res) => {
    const data = []
    res.send();
});



module.exports = router;