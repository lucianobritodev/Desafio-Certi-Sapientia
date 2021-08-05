const express = require('express')
const parser = require('../services/parser')
const router = express.Router()

router.get('/:num', (req, resp, next) => {
    let output = {extenso: 0}
    output.extenso = parser(req.params['num'])
    resp.send(JSON.stringify(output) + '\n')
    next()
})

module.exports = router;