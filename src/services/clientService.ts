import { IClient } from '~/models/clientInterface'
import { Client } from '../models/clientModel'
import { AppDataSource } from '~/config/database'

const clientRepository = AppDataSource.getRepository(Client)

export class ClientService {
  async create(clientData: IClient): Promise<Client> {
    const client = clientRepository.create(clientData)
    return await clientRepository.save(client)
  }

  async count(): Promise<number> {
    return await clientRepository.count()
  }

  async findByName(clienteName: string): Promise<IClient[]> {
    return await clientRepository.findBy({ name: clienteName })
  }

  async findById(id: string): Promise<Client | null> {
    return await clientRepository.findOne({ where: { id } })
  }

  async findAll(): Promise<Client[]> {
    return await clientRepository.find()
  }

  async update(
    id: string,
    clientData: Partial<IClient>
  ): Promise<Client | null> {
    const client = await this.findById(id)

    if (!client) return null

    return await clientRepository.save(
      clientRepository.merge(client, clientData)
    )
  }

  async delete(id: string): Promise<Boolean> {
    const result = await clientRepository.delete(id)
    if (result.affected !== 0) {
      return true
    }

    return false
  }
}
