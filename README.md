# Autenticação com NextAuth.js e GitHub

Projeto demonstrando autenticação de usuários via GitHub usando Auth.js em uma aplicação Next.js. Após o login, são exibidas informações básicas da conta do GitHub, como nome de usuário, e-mail e repositórios públicos.

## Funcionalidades

- Autenticação via GitHub utilizando Auth.js.
- Exibição de informações do perfil do usuário autenticado.
- Interface responsiva e adaptável para diferentes dispositivos.

## Detalhes

A autenticação ocorre através do fluxo OAuth do GitHub, garantindo segurança e praticidade. O NextAuth.js facilita a integração e o gerenciamento de sessões, permitindo uma experiência fluida e segura.

A interface foi desenvolvida com foco em usabilidade, utilizando boas práticas de design para tornar a interface intuitiva.

Além disso, o protocolo **OAuth** utilizado no processo de autenticação permite que aplicações acessem recursos de terceiros sem expor credenciais do usuário. Esse modelo de autorização melhora a segurança e reduz riscos relacionados ao armazenamento de senhas.

Da mesma forma que a autenticação foi feita via GitHub, o NextAuth.js também permite a integração com outros provedores conhecidos, como **Google, Facebook, Instagram, Discord, e outros**, ampliando as possibilidades de login social dentro da aplicação.
