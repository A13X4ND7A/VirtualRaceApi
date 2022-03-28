const express = require('express')
const config = require('./config')
const routes = require('./routes')


const app = express()

routes(app)
app.locals = {
    ...app.locals,
    config
}

module.exports = app
