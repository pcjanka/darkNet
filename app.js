require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./src/routes/index')
const levelsRouter = require('./src/routes/levels')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(expressLayouts)
app.set('layout', 'layout')

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/', levelsRouter)

// 404
app.use((req, res) => {
  res.status(404).render('error', {
    title: '404 - NIE ZNALEZIONO',
    message: 'Tego tutaj nie ma. Może jeszcze nie znalazłeś właściwej ścieżki.',
    hint: 'Spróbuj jeszcze raz'
  })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
