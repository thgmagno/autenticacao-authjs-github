# Autenticação com NextAuth.js e GitHub

Este é um projeto prático demonstrando como implementar a autenticação de usuários usando o GitHub com a biblioteca NextAuth.js em uma aplicação Next.js. Ao realizar o login, o usuário pode visualizar algumas informações da sua conta do GitHub, como o nome de usuário, e-mail e repositórios públicos. O objetivo deste projeto é exemplificar como integrar o fluxo de autenticação do GitHub em uma aplicação Next.js e exibir informações de perfil de forma simples e eficaz.

## Funcionalidades

- **Autenticação com GitHub**: O usuário pode realizar login com sua conta do GitHub utilizando o NextAuth.js.
- **Exibição de Dados do Usuário**: Após a autenticação, o nome de usuário, e-mail e repositórios públicos do GitHub são exibidos na página.
- **Design Responsivo**: A interface é responsiva e se adapta bem a diferentes dispositivos.
- **Autenticação Simples e Segura**: A aplicação utiliza NextAuth.js para garantir uma implementação simples e segura da autenticação.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **NextAuth.js**: Biblioteca para autenticação, facilitando a integração com o GitHub.
- **Tailwind CSS**: Framework CSS para criar layouts rápidos e responsivos.
- **React**: Biblioteca para construção da interface de usuário.

## Como Rodar o Projeto

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/thgmagno/github-auth
   ```

2. **Instale as dependências**:
   ```bash
   cd github-auth
   npm install
   ```

3. **Configure a autenticação do GitHub**:
   - Crie uma aplicação OAuth no [GitHub Developer Settings](https://github.com/settings/applications).
   - Defina a URL de redirecionamento como `http://localhost:3000/api/auth/callback/github`.
   - Copie seu **Client ID** e **Client Secret** e adicione-os no arquivo `.env.local`:
     ```
     AUTH_GITHUB_ID=seu-client-id
     AUTH_GITHUB_SECRET=seu-client-secret
     ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acesse o projeto**:
   Abra seu navegador e vá para `http://localhost:3000`.

## Como Funciona

1. O usuário clica para autenticar com o GitHub.
2. O NextAuth.js gerencia o fluxo de autenticação, redirecionando o usuário para a página de login do GitHub.
3. Após a autenticação, o NextAuth.js retorna com as informações do usuário, que são exibidas na página, incluindo:
   - **Nome de usuário**
   - **E-mail**
   - **Repositórios públicos**

## Considerações Finais

Este projeto serve como uma excelente introdução à integração do GitHub com autenticação em uma aplicação Next.js usando NextAuth.js. Ele oferece uma maneira simples e eficaz de gerenciar a autenticação de usuários e pode ser facilmente adaptado para outros serviços de autenticação, como Google ou Facebook.

A interface foi feita com Tailwind CSS para garantir um design limpo e responsivo, com foco na experiência do usuário.
