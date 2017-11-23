const express = require('express')
const router = express.Router()
const Alexa = require('alexa-sdk')

const handlers = {
    'StephsNotesControlIntent': function(color, text) {
        console.log('Hitting the alexa endpoint')
        this.emit(':tell', 'Hello World!')
    }
}

router.get('/', function(req, res, next) {
    res.send('Hello Alexa!');
})

exports.handler = function (event, context, callback) {
    let alexa = Alexa.handler(event, context, callback)
    alexa.registerHandlers(handlers)
    alexa.execute()
}

module.exports = router