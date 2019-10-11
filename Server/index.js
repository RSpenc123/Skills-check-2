require ('dotenv').config()

const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()

app.use (express.json())

const {SERVER_PORT, CONNECTING_STRING} = process.env

massive(CONNECTING_STRING)
.then(db => {
    app.set('db',db)
    console.log('connected db')
})

app.get('/api/item', ctrl.getItem)
app.post('/api/item', ctrl.addItem)
app.put('/api/item/:id', ctrl.editItem)
app.delete('/api/item/:id',ctrl.deleteItem)


app.listen(SERVER_PORT, console.log('we up'))
