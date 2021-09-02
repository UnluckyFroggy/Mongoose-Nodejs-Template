const express = require('express')
const app = express()

const server = require('http').createServer(app)

const mongoose = require('./data/mongo.js')()

const mongoExample = require('./data/models/example.js')

io.on('connection', socket => {
  console.log('Sockets Connected!')
})

const port = '8080';

server.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
