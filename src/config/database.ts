import { DataSource, DataSourceOptions } from 'typeorm'

const databaseConfig: DataSourceOptions = {
  type: 'sqlite',
  database: './repository/database.sqlite',
  entities: ['./src/models/*.ts'],
  synchronize: true, //usar somente em desenvolvimento (sinconiza as tabelas e pode perder dados)
}

export const AppDataSource = new DataSource(databaseConfig)

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Banco de dados conectado com sucesso.')
  } catch (error) {
    console.error('Erro ao conectar no banco:', error)
  }
}
