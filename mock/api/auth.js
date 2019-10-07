const router = require('express').Router();
const jwt = require('jsonwebtoken');
router.post('/login', (req, res) => {
    const user = {
        username: 'alex',
        user_id: 'AS7d3',
        avator: null,
        user_state: '1',
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

router.post('/setpassword', (req, res) => {
    res.send({ code: 0, data: '2' });
});

router.post('/resetpassword', (req, res) => {
    res.send({ code: 0, data: '2' });
});


module.exports = router;