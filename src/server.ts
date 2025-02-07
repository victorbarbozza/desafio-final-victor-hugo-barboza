import express from 'express'
import cors from 'cors'

import { clientsRouter } from '~/routes/clientRoutes'
import { adminRouter } from './routes/adminRoute'
import { initializeDatabase } from './config/database'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', clientsRouter)
app.use('/', adminRouter)

const port = 3000

initializeDatabase().then(() => {
  app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })
})
