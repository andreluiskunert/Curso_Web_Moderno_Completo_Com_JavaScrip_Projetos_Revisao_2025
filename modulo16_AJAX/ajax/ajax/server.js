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
        callback(null, '.')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
    //  fazer o restante amanhã de noite 
})
app.listen(8080, () => console.log('Executando....'))