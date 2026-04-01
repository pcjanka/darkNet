const crypto = require('crypto')

const getLevel1 = (req, res) => {
  res.render('level1', { title: 'POZIOM 01' })
}

const getLevel2 = (req, res) => {
  if (req.query.code !== 'aurora') {
    return res.status(403).render('error', {
      title: 'ODMOWA DOSTĘPU',
      message: 'Nieprawidłowy kod dostępu. Wróć i poszukaj hasła w źródle strony.',
      hint: null
    })
  }
  res.render('level2', { title: 'POZIOM 02' })
}

const getLevel3 = (req, res) => {
  if (req.query.user !== 'admin') {
    return res.status(403).render('error', {
      title: 'BRAK DOSTĘPU',
      message: 'Tylko administrator może wejść.',
      hint: null
    })
  }
  res.render('level3', { title: 'POZIOM 03' })
}

const getLevel4 = (req, res) => {
  if (req.query.password !== 'napewno') {
    return res.status(403).render('error', {
      title: 'ZŁE HASŁO',
      message: 'Nieprawidłowe hasło.',
      hint: null
    })
  }
  res.render('level4', { title: 'POZIOM 04' })
}

const getLevel5 = (req, res) => {
  const expected = crypto.createHash('md5').update('spectre').digest('hex')
  const provided = (req.query.hash || '').toLowerCase()

  if (provided !== expected) {
    return res.status(403).render('error', {
      title: 'ZŁY SKRÓT',
      message: 'Hash jest nieprawidłowy. Znajdź właściwe słowo i oblicz jego skrót MD5.',
      hint: null
    })
  }
  res.render('level5', { title: 'POZIOM 05' })
}

const getLevel6 = (req, res) => {
  res.render('level6', { title: 'POZIOM 06' })
}

const getFinal = (req, res) => {
  res.render('final', { title: 'TRANSMISJA KOŃCOWA' })
}

module.exports = {
  getLevel1,
  getLevel2,
  getLevel3,
  getLevel4,
  getLevel5,
  getLevel6,
  getFinal
}