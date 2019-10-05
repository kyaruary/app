const router = require('express').Router();


router.get('/:id', (req, res) => {
    const id = req.params.id;
    const data = {
        release_time: new Date('2019/10/6 15:45:46').getTime(),
        speed_level: '3',
        ph: '1000',
        layer: '',
        benefit: '80',
        acceleration_time: "23:32"
    }
    if (id === 'AS7d3') {
        res.send({ code: 0, data });
    } else {
        res.send({ code: 1 })
    }

});
module.exports = router;