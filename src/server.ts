import { app } from './app'
import { initializeDatabase } from './config/database'

const port = 3000

initializeDatabase().then(() => {
  app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })
})
