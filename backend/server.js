const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const mainRoute = require('./routes/index.js')
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});


dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to mongoDb')
  } catch (error) {
    throw error
  }
}

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(cors())

app.use('/api', mainRoute)