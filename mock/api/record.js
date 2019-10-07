const router = require('express').Router();


router.get('/release/:id', (req, res) => {
    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            time: new Date(`2019/10/3 ${i * 1}:${i * 2}:${i * 2}`).getTime(),
            value: Math.floor(Math.random() * i * 10000)
        })
    }
    res.send({ code: 0, data });
})
router.get('/inject/:id', (req, res) => {
    const data = [];
    for (let i = 0; i < 12; i++) {
        data.push({
            time: new Date(`2019/10/3 ${i * 1}:${i * 2}:${i * 3}`).getTime(),
            value: Math.floor(Math.random() * i * 10000)
        })
    }
    res.send({ code: 0, data });
})
router.get('/acceleration_time/:id', (req, res) => {
    const data = [];
    for (let i = 0; i < Math.floor(Math.random() * 8 + 1); i++) {
        data.push({
            nickname: `伞兵${i}号卢本伟`,
            level: Math.floor(Math.random() * 8 + 1),
            accelerate_time: '12:12'
        })
    }
    res.send({ code: 0, data });
})
router.get('/recharge', (req, res) => {
    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            order: 'V2331224124190',
            time: '2013/12/21 12:12',
            count: '1000' * i
        })
    }
    res.send({ code: 0, data })
})
module.exports = router;