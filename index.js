const express = require('express')
const app = express()
const PORT = 5050
const { startDelivery } = require('./controllers/mailer')

app.use(express.json())

app.post('/send-mail2', startDelivery)

app.listen(PORT, function() {
    console.log('App has been started ' + PORT)
})