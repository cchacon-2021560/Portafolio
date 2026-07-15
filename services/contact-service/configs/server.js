import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from '../src/contact/contact.routes.js'
import errorHandler from '../middlewares/errorHandler.js'

dotenv.config()

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/contact', contactRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Contact service running on port ${PORT}`)
})

export default app
