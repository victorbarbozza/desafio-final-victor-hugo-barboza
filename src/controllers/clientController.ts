import { Request, Response } from 'express'
import { ClientService } from '~/services/clientService'
import { IClient } from '~/models/clientInterface'

export class ClientController {
  private clientService: ClientService

  constructor() {
    this.clientService = new ClientService()
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const clientData: IClient = req.body
      if (!clientData.name || !clientData.email) {
        return res.status(400).json({
          message: 'Faltam parametros obrigatorios',
        })
      }
      const newClient = await this.clientService.create(clientData)
      return res.status(201).json(newClient)
    } catch (e) {
      return res.status(400).json({
        message: 'Erro ao criar o cliente',
        error: e,
      })
    }
  }

  async count(req: Request, res: Response): Promise<Response> {
    try {
      const count = await this.clientService.count()
      return res.status(200).json(count)
    } catch (e) {
      return res.status(500).json({
        message: 'Erro ao contar os Clientes',
      })
    }
  }

  async findByName(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.params
      const client = await this.clientService.findByName(name)

      if (!client) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
      }

      return res.status(200).json(client)
    } catch (e) {
      return res.status(500).json({
        message: 'Erro ao buscar Cliente',
      })
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const client = await this.clientService.findById(id)

      if (!client) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
      }

      return res.status(200).json(client)
    } catch (e) {
      return res.status(500).json({
        message: 'Erro ao buscar o Cliente',
      })
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const clients = await this.clientService.findAll()
      return res.status(200).json(clients)
    } catch (e) {
      return res.status(500).json({
        message: 'Erro ao buscar Clients',
      })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const clientData: Partial<IClient> = req.body

      const updatedClient = await this.clientService.update(id, clientData)

      if (!updatedClient) {
        return res.status(404).json({ message: 'Cliente nao encontrado' })
      }

      return res.status(200).json(updatedClient)
    } catch (e) {
      return res.status(400).json({
        message: 'Erro ao atualizar o cliente',
      })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      const deleted = await this.clientService.delete(id)
      if (!deleted) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
      }

      return res.status(200).json({ message: 'Cliente Deletado' })
    } catch (e) {
      return res.status(500).json({
        message: 'Erro ao deletar o cliente',
      })
    }
  }
}
