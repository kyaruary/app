const router = require('express').Router();
router.get('/', (req, res) => {
    const data = []
    res.send();
});

router.post('/login', (req, res) => {
    const user = {
        username: 'alex',
        user_id: 'dasodaj',
        avator: '/',
        state: '1',
    }
    res.send(user);
});

router.post('/update', (req, res) => {
    res.send();
});


module.exports = router;