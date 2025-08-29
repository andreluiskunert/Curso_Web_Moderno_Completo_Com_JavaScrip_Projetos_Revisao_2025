const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
// 
app.use(bodyParser.urlencoded( {extended : true}))

app.get('/produtos', (req, res, next) =>{
  res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id', (req, res, next) =>{
        res.send(bancoDeDados.getProduto(req.params.id))

})
app.post('/produtos', (req, res, next) =>{
  const produto = bancoDeDados.salvarProduto({
    nome : req.body.name,
    preco : req.body.preco,
    marca : req.body.marca,
    modelo : req.body.modelo
  })  
  res.send(produto) // Gerar Um JSON
})
app.put('/produtos/:id', (req, res, next) =>{
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome : req.body.name,
    preco : req.body.preco,
    marca : req.body.marca,
    modelo : req.body.modelo
  })  
  res.send(produto) 
})
app.delete('/produtos/:id', (req, res, next) =>{
  const produto = bancoDeDados.excluirProduto(req.params.id )  
  res.send(produto) 
})
app.listen(porta,()=>{
    console.log(`Servidor conectado à  porta: ${porta}`)
})