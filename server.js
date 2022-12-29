// --- REQUIRE MODULES ---//
require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3002
const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))
app.use('./api/users', require('./routes/api/users'))
app.use('/api/bookmarks', require('./routes/api/bookmarks'))


app.get('/api/test', (req, res) => {
  res.json({ eureka: 'you have been found!' })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`)
})
