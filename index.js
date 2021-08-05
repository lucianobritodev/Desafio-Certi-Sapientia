const express = require('express')
const app = express()
const router = require('./src/routes/routes')

const url = 'http://127.0.0.1'
const port = 3000


/** 
 * Middlewares */
 app.use(express.json())
 app.use('/', router)

app.get('/', (req, resp, next) => {
    resp.send('Desafio Cert Sapienta')
})

app.use((error, req, res, next) => {
    res.sendStatus(500);
})

app.listen(port, () => {
    console.log(`Server is running at url ${url}:${port}...`)
})