// this code is a part of lec 43
const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

// This will copy from express docs 
const app = express()
const port = 5000
app.use(cors())

// agr ap req.body ko use krna chta hai tw ap ko ye middleware use krni ho gi
app.use(express.json())

// Available Routes 
app.use('/api/auth/' , require('./routes/auth'))
// app.use('/api/notes/' , require('./routes/notes'))

// This will part lec 44 but it is not recomonded 
// app.get('/', (req, res) => {
//   res.send('Hello Mudassir!')
// })

// app.get('/api/v1/login', (req, res) => {
//   res.send('login!')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('SignUp!')
// })

app.listen(port, () => {
  console.log(`iNoteBook backend listening on port ${port}`)
})
