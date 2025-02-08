# Desafio Final Modulo-4

Este projeto é uma API RESTful desenvolvida com Node.js e Express para o desafio final do modulo 4.

## Requisitos

NodeJs 22+

## Instalação

Instale as dependências:

```sh
npm install
```

## Executando o Projeto

Para iniciar o servidor, utilize o seguinte comando:

```sh
npm start
```

A API estará disponível em `http://localhost:3000`.

## Rotas de Teste

### Clients

- Criar um cliente:
  ```sh
  POST /clients
  ```
- Contar clientes:
  ```sh
  GET /clients/count
  ```
- Buscar todos os clientes:
  ```sh
  GET /clients
  ```
- Buscar cliente por nome:
  ```sh
  GET /clients/name/:name
  ```
- Buscar cliente por ID:
  ```sh
  GET /clients/:id
  ```
- Atualizar cliente por ID:
  ```sh
  PUT /clients/:id
  ```
- Deletar cliente por ID:
  ```sh
  DELETE /clients/:id
  ```

### Admin

- Página de testes:
  ```sh
  GET /admin
  ```

Essa rota retorna um painel HTML (`page.html`) para testar as funcionalidades do controlador.
