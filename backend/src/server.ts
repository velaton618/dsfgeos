import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

let cors = require('cors');
let corsOptions = {
  origin: [
    'http://localhost:3000'
  ],
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(8080)
}

start()
