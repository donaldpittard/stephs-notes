const express = require('express')
const router = express.Router()
const Alexa = require('alexa-sdk')

const handlers = {
    'StephsNotesControlIntent': (color, text) => this.emit('SayHello'),
    'LaunchRequest': () => this.emit('SayHello'),
    'HelloWorldIntent': () => this.emit('SayHello'),
    'SayHello': () => {
        this.response.speak('Hello World')
        this.emit(':responseReady')
    },
    'AMAZON.HelpIntent': () => {
        const speechOutput = 'This is the say Hello World sample skill'
        const reprompt = 'Say Hello to hear me speak'

        this.response.speak(speechOutput).listen(reprompt)
        this.emit(':responseReady')
    },
    'AMAZON.CancelIntent': () => {
        this.response.speak('Goodbye')
        this.emit(':resonseReady')
    },
    'AMAZON.StopIntent': () => {
        this.response.speak('See you later')
        this.emit(':responseReady')
    }
}

router.post('/', function(req, res) {
    exports.handler = function (event, context, callback) {
        let alexa = Alexa.handler(event, context, callback)
        alexa.registerHandlers(handlers)
        alexa.execute()
    }

    console.log(req);
    console.log(res);
    res.send(alexa);
})

module.exports = router