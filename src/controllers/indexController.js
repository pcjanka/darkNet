const getHome = (req, res) => {
  res.render('index', { title: 'DARKNET' })
}

const getRobots = (req, res) => {
  res.type('text/plain').send(
`User-agent: *
Disallow: /admin
Disallow: /secret
# Jeśli tu dotarłeś - spróbuj /level1
Allow: /level1
`)
}

module.exports = { getHome, getRobots }
