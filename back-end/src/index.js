const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://thiago:84326625@cluster0-shard-00-00-1nznx.mongodb.net:27017,cluster0-shard-00-01-1nznx.mongodb.net:27017,cluster0-shard-00-02-1nznx.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())

// Metodos HTTP: GET, POST, PUT, DELETE

// Query Params: req.query
// Route Params: req.params
// Body: rq.body

app.use(routes)


app.listen(3333, () => {
    console.log('server ON')
})