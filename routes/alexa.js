const express = require('express')
const router = express.Router()
const Alexa = require('alexa-sdk')

const handlers = {
    'StephsNotesControlIntent': function(color, text) {
        console.log('Hitting the alexa endpoint')
        this.emit(':tell', 'Hello World!')
    }
}

router.post('/', function(req, res) {
    exports.handler = function (event, context, callback) {
        let alexa = Alexa.handler(event, context, callback)
        alexa.registerHandlers(handlers)
        alexa.execute()
    }

    res.send('Hello Alexa!');
})

module.exports = router