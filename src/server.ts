import express from 'express'
import cors from 'cors'

import { clientsRouter } from '~/routes/clientRoutes'
import { adminRouter } from './routes/adminRoute'
import { initializeDatabase } from './config/database'

const app = express()

// adicionando funções ao express
app.use(cors())
app.use(express.json())

// atribuição das rotas
app.use('/api', clientsRouter)
app.use('/', adminRouter)

const port = 3000

//abrir uma conexão antes de iniciar o servidor da api
initializeDatabase().then(() => {
  app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log(`Painel Admin rodando em http://localhost:${port}/admin`)
  })
})
