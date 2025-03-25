# Backend - Sistema de Login e Usuários

Este é o backend de um sistema de login e gerenciamento de usuários, desenvolvido com Node.js e Fastify.

## Tecnologias usadas
- Node.js
- Fastify
- MongoDB
- JSON Web Token (JWT)

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/cirosardinha/login-app-backend
   cd login-app-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e preencha com as seguintes variáveis:
   ```env
   MONGO_URI=<sua-url-do-mongodb>
   JWT_SECRET=<sua-chave-secreta-jwt>
   PORT=3000
   ```

4. Rode o servidor:
   ```bash
   npm run dev
   ```

5. O servidor estará disponível em: `http://localhost:3000`

## Funcionalidades
- Cadastro de usuários
- Login com autenticação JWT
- Listagem de usuários

## Estrutura do projeto
- **routes/**: Define as rotas da aplicação.
- **controllers/**: Contém a lógica das rotas.
- **services/**: Contém as regras de negócio.
- **repositories/**: Gerencia a comunicação com o banco de dados.


