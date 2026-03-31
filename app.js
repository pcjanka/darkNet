require('dotenv').config()
const express = require('express')
const crypto = require('crypto')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/level1', (req, res) => {
    res.render('level1')
})

app.get('/level2', (req, res) => {
    const code = req.query.code

    if (code === 'nice') {
        res.render('level2')
    } else {
        res.send("Brak dostępu")
    }
})

app.get('/level3', (req, res) => {
    const hash = crypto.createHash('md5').update('napewno').digest('hex')

    if (req.query.hash.toLowerCase() === hash) {
        res.render('level3')
    } else {
        res.send("Zły hash")
    }
})

app.get('/level4', (req, res) => {
    const user = req.query.user

    if (user === 'admin') {
        res.render('level4')
    } else {
        res.send("Tylko admin może wejść")
    }
})
app.get('/hidden/level5', (req, res) => {
    res.render('level5')
})
app.get('/final', (req, res) => {
    res.render('final')
})

app.listen(3305, () => console.log("http://localhost:3305"))