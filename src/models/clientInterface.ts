export interface IClient {
  id: string
  name: string
  email: string
  phone?: string
  birthday?: number
  address?: string
  createdAt?: Date
  updatedAt?: Date
}
