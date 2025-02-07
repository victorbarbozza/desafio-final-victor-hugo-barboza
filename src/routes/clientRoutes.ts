import { Router } from 'express'
import { ClientController } from '~/controllers/clientController'

const clientsRouter = Router()
const clientController = new ClientController()

// Rota para criar um novo cliente
clientsRouter.post('/clients', (req, res) => {
  clientController.create(req, res)
})

// Rota para contar clientes
clientsRouter.get('/clients/count', (req, res) => {
  clientController.count(req, res)
})

// Rota para buscar todos os clientes
clientsRouter.get('/clients', (req, res) => {
  clientController.findAll(req, res)
})

// Rota para buscar um cliente pelo nome
clientsRouter.get('/clients/name/:name', (req, res) => {
  clientController.findByName(req, res)
})

// Rota para buscar um cliente pelo ID
clientsRouter.get('/clients/:id', (req, res) => {
  clientController.findById(req, res)
})

// Rota para atualizar um cliente pelo ID
clientsRouter.put('/clients/:id', (req, res) => {
  clientController.update(req, res)
})

// Rota para deletar um cliente pelo ID
clientsRouter.delete('/clients/:id', (req, res) => {
  clientController.delete(req, res)
})

export { clientsRouter }
