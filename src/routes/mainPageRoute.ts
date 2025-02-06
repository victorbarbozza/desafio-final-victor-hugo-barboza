import { Router } from 'express'

const mainPageRoutes = Router()

mainPageRoutes.get('/', (req, res) => {
  res.sendFile('page.html', { root: '.' })
})
export { mainPageRoutes }
