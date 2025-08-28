const porta = 3003
const express = require('express')
const app = express()
// 
// app.get('/produtos', (req, res, next) =>{
//      console.log('Middleware 1...')
//      next() 
// })
app.get('/produtos', (req, res, next) =>{
    res.send({nome:'Notebook',marca: 'Lenovo',modelo:'T44p', preco: 1799.00}) // conveter para JSON
})
app.listen(porta,()=>{
    console.log(`Servidor conectado à  porta: ${porta}`)
})