import { auth } from '@/auth'
import { Banner } from '@/components/Banner'
import { GithubAuthButton } from '@/components/GithubAuthButton'
import { GithubUserAuthenticated } from '@/components/GithubUserAuthenticated'

export default async function Home() {
  const session = await auth()

  return (
    <main className="mx-auto flex w-[90%] max-w-4xl flex-col items-center">
      <div className="flex flex-col rounded-2xl bg-neutral-900 px-3 py-8 md:px-8">
        <Banner />
        <AboutProject />
        {session?.user ? (
          <GithubUserAuthenticated session={session} />
        ) : (
          <GithubAuthButton />
        )}
        <AboutOAuth />
      </div>
    </main>
  )
}

function AboutProject() {
  return (
    <section>
      <h1 className="text-xl font-bold lg:text-3xl">
        Autenticação com NextAuth.js e Github
      </h1>
      <article className="my-3.5 text-neutral-400">
        <p>
          Explore o poder e a facilidade de um sistema de login utilizando o
          Github para autenticação em uma aplicação Next.js
        </p>
        <p>
          Conecte-se com sua conta do GitHub e visualize detalhes do seu perfil,
          como nome de usuário, e-mail e repositórios públicos.
        </p>
        <p>
          Este é um exemplo prático de como integrar autenticação OAuth em
          aplicações modernas.
        </p>
      </article>
    </section>
  )
}

function AboutOAuth() {
  return (
    <details>
      <summary className="cursor-pointer text-lg font-bold text-neutral-200">
        Como funciona o OAuth?
      </summary>
      <div className="mt-3 space-y-4 text-neutral-400 transition-opacity duration-300">
        <p>
          OAuth é um protocolo aberto que permite autenticação segura entre
          serviços sem que o usuário precise compartilhar sua senha diretamente.
          Ele é amplamente utilizado para permitir login através de contas de
          terceiros, como GitHub, Google e Facebook.
        </p>
        <p>
          No caso desta aplicação, utilizamos OAuth via GitHub para autenticar
          usuários. O processo funciona assim:
        </p>
        <ul>
          <li>✅ O usuário clica no botão de login com GitHub.</li>
          <li>
            ✅ Ele é redirecionado para a página de autenticação do GitHub.
          </li>
          <li>
            ✅ Após conceder permissão, o GitHub retorna um token de acesso.
          </li>
          <li>
            ✅ O NextAuth.js usa esse token para obter informações do usuário.
          </li>
          <li>
            ✅ O usuário é autenticado e pode acessar seus dados na aplicação.
          </li>
        </ul>
        <p>
          Esse método garante uma experiência segura e prática, evitando a
          necessidade de senhas adicionais e oferecendo um fluxo de login
          confiável.
        </p>
      </div>
    </details>
  )
}
