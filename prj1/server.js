const express = require('express')

app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(80)