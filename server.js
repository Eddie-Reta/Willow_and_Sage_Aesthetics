const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080;

const path = require('path');

app.use(express.static(path.join(__dirname, 'app')))
    
app.get('/', function (req, res, next) {
    res.render('index.html');
})

app.listen(PORT, () => {
  console.log(`App now running on ${PORT}`)
})