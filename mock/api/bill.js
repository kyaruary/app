const router = require('express').Router();


router.get('/:id', (req, res) => {
    const data = {
        release_time: '',
        speed_level: '',
        ph: '',
        layer: '',
        benefit: '',
        acceleration_time: ''
    }
    res.send(data);
});
module.exports = router;