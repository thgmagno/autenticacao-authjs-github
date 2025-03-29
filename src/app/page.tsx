export default function Home() {
  return (
    <main className="mx-auto flex h-screen w-[90%] max-w-5xl flex-col items-center justify-center">
      <div className="my-20 flex flex-col space-y-3">
        <h1 className="font-mono text-4xl font-bold tracking-tight">
          Autenticação com NextAuth.js e Github
        </h1>
        <p className="text-xl font-semibold text-neutral-500">
          O poder e a facilidade de um sistema de login utilizando o Github para
          autenticação em uma aplicação Next.js
        </p>
      </div>
    </main>
  )
}
