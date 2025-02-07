export interface IClient {
  id: string
  name: string
  email: string
  phone?: string
  birthday?: Date
  address?: string
  createdAt?: Date
  updatedAt?: Date
}
