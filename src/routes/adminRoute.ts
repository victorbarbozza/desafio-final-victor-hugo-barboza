import { Router } from 'express'

const adminRouter = Router()

adminRouter.get('/admin', (req, res) => {
  res.sendFile('./src/view/page.html', { root: '.' })
})
export { adminRouter }
