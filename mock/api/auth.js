const router = require('express').Router();
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => {
    const data = []
    res.send();
});

router.post('/login', (req, res) => {
    const user = {
        username: 'alex',
        user_id: 'AS7d3',
        avator: null,
        state: '1',
    }
    const token = jwt.sign(user, 'climber');
    const secret = req.body.secret;
    if (secret == 'hjajdhahhs123455241231nieidhaj') {
        res.send({
            code: 0,
            data: {
                ...user,
                token
            }
        })
    } else {
        res.send({
            code: 1
        })
    }
});

router.post('/pay', (req, res) => {
    res.send();
});


module.exports = router;