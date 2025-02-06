import express from 'express'

import { clientsRoutes } from '~/routes/clientRoutes'
import { mainPageRoutes } from './routes/mainPageRoute'

const app = express()

app.use(express.json())

app.use('/api', clientsRoutes)
app.use('/', mainPageRoutes)

export { app }
