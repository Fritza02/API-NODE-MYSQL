const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes.js')

const app = express()
app.set('port', process.env.PORT || 9000)
/*
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dellanya',
    database: 'products'
}
*/
const dbOptions = {
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'b9d52a8305a98f',
    password: '1a6640a0',
    database: 'heroku_b0bde1db5c09175'
}

// middlewares 
app.use(myconn(mysql, dbOptions, 'single')) // single: estrategia 
app.use(express.json())
app.use(cors())

// ruta principal aplicación
app.get('/', (req, res) => {
    res.send('welcome to my api')
})

app.use('/api', routes)

// server corriendo
app.listen(app.get('port'), () => {
    console.log('server runing on port', app.get('port'))
})