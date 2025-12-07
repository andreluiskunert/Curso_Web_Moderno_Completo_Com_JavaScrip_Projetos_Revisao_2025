const bodyParser = require('body-parser')
const express = require('express')
const app = express()
// mão na obra
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
    //  fazer o restante amanhã de noite 
})
//  terça-feira, 25/11/2025_de noite
const upload = multer({ storage }).single('arquivo')
app.post('/upload', (req, res) => {
 upload(req, res, err =>{
    // quarta-feira, 26/11/2025
    if(err){
        return res.end('Ocorreu un erro')
    }
    res.end('Concluido com sucesso')
 })
})
app.post('/formulario', (req, res) =>{
    res.send({
        ...req.body,
        id: 7

    })
})
//  Sabádo 06/12/2025_de noite 
app.get('/parOuImpar', (req, res) =>{
    // requisição ponto body{...req.body}
   // requisição ponto query {...req.query}
  // requisição ponto params{...req.params} ex.: app.get('/parOuImpar/:numeros', (req, res) =>{....}


    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })



})

app.listen(8080, () => console.log('Executando....'))