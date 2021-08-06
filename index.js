const express = require('express')
const app = express()

const router = require('./src/routes/routes')
const messageError = require('./src/messages/message-error')

const url = 'http://127.0.0.1'
const port = 3000
const path = __dirname

/**
 * Middlewares */
app.use(express.json())
app.use('/', router)
app.use((error, req, res, next) => {
    if (error) {
        res.send(JSON.stringify(messageError(error)))
    }
    next()
})

app.get('/', (req, res) => {
    res.sendFile(path + '/src/views/index.html')
})

app.listen(port, () => {
    console.log('Server is running...\n' + `url: \'${url}:${port}\'`)
})