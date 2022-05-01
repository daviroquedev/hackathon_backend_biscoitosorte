const express = require('express')
// const db = require('./dbConnection')
const frases = require('./mockup.js')


const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))
app.set('views', './views')

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {
  //passamos atraves de um JSON todas as frases
  res.render('index', { frases: frases })
});
app.get('/quebrado', (req, res) => {
  //passamos atraves de um JSON todas as frases
  res.render('quebrado',  { frases: frases })
});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});