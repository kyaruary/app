const router = require('express').Router();
const fs = require('fs');
fs.readdirSync(__dirname).forEach(filename => {
    if (filename.match(/\.js$/) && filename != 'index.js') {
        const name = filename.split('.')[0];
        router.use('/api/' + name, require('./' + filename))
    }
})
module.exports = router;