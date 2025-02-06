import { Router } from 'express'
import { ClientController } from '~/controllers/clientController'

const clientsRoutes = Router()
const clientController = new ClientController()

// Rota para criar um novo cliente
clientsRoutes.post('/clients', (req, res) => {
  clientController.create(req, res)
})

// Rota para contar clientes
clientsRoutes.get('/clients/count', (req, res) => {
  clientController.count(req, res)
})

// Rota para buscar todos os clientes
clientsRoutes.get('/clients', (req, res) => {
  clientController.findAll(req, res)
})

// Rota para buscar um cliente pelo nome
clientsRoutes.get('/clients/name/:name', (req, res) => {
  clientController.findByName(req, res)
})

// Rota para buscar um cliente pelo ID
clientsRoutes.get('/clients/:id', (req, res) => {
  clientController.findById(req, res)
})

// Rota para atualizar um cliente pelo ID
clientsRoutes.put('/clients/:id', (req, res) => {
  clientController.update(req, res)
})

// Rota para deletar um cliente pelo ID
clientsRoutes.delete('/clients/:id', (req, res) => {
  clientController.delete(req, res)
})

export { clientsRoutes }
