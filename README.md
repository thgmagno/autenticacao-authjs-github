# 📌 Autenticação com NextAuth.js e GitHub

Este projeto demonstra a implementação de autenticação com GitHub usando NextAuth.js em uma aplicação Next.js.

## 🎯 Funcionalidades
- **Autenticação com GitHub**: Login via conta do GitHub.
- **Exibição de Dados do Usuário**: Nome, e-mail e repositórios públicos.
- **Design Responsivo**: Interface adaptável para diversos dispositivos.

## 🚀 Como Executar
1. Clone este repositório:
   ```sh
   git clone https://github.com/thgmagno/github-auth
   ```
2. Instale as dependências:
   ```sh
   cd github-auth
   npm install
   ```
3. Configure a autenticação do GitHub no arquivo `.env.local`:
   ```sh
   AUTH_GITHUB_ID=seu-client-id
   AUTH_GITHUB_SECRET=seu-client-secret
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```
5. Acesse `http://localhost:3000`.
