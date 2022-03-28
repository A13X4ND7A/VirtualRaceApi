const getData = require('../middleware')

module.exports = (app) => {
    app.get('/', getData)
}

