import express from 'express'
import { tripRouter } from './router/tripRouter'
import cors from 'cors'
import { API_PORT } from './utils/env'

const app = express()
const PORT = API_PORT || '8080'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api/trips', tripRouter)

app.listen(PORT, () => {
  console.log('Listening to port', PORT)
})

// For testing purpose
export { app }
