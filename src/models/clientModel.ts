import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm'
import { IClient } from './clientInterface'

@Entity('clients')
export class Client implements IClient {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'text', nullable: false })
  name!: string

  @Column({ type: 'text', nullable: false })
  email!: string

  @Column({ type: 'text', nullable: true })
  phone?: string

  @Column({ type: 'datetime', nullable: true })
  birthday?: Date

  @Column({ type: 'text', nullable: true })
  address?: string

  @CreateDateColumn({ type: 'datetime' }) // já cuida da criação do campo na inserção
  createdAt!: Date

  @UpdateDateColumn({ type: 'datetime' }) // já atualiza o campo a cada update
  updatedAt!: Date

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = crypto.randomUUID()
    }
  }
}
