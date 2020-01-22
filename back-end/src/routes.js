const { Router } = require('express')

const dev = require('./controllers/DevController')
const search = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', dev.index)
routes.post('/devs', dev.store)

routes.get('/search', search.index)

module.exports = routes