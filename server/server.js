const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const dotenv = reuqire('dotenv')
const app = express()

app.set('port', process.env.PORT || 1337)
dotenv.load()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log('Server started listening to port ', app.get('port'))
})
