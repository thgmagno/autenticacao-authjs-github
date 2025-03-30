import Image from 'next/image'
import { Session, User } from 'next-auth'
import { SignOutButton } from './SignOutButton'
import { Repo } from '@/types/repo'
import { GithubRepository } from './GithubRepository'
import { BookMarked } from 'lucide-react'
import { truncateString } from '@/utils/truncateString'

const fetcherRepositories = async (session: Session) =>
  fetch(`https://api.github.com/user/repos`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  }).then((res) => res.json())

export async function GithubUserAuthenticated({
  session,
}: {
  session: Session
}) {
  if (!session || !session.user) return null
  const repos = await fetcherRepositories(session)
  return <GithubUserInfo user={session.user} repos={repos} />
}

function GithubUserInfo({ user, repos }: { user: User; repos: Repo[] }) {
  return (
    <div className="mx-auto my-10 w-full max-w-xl rounded-2xl bg-neutral-950">
      <section className="flex w-full items-center border-b-4 border-neutral-700 p-3">
        <UserImage src={user.image} name={user.name} />
        <div className="flex-1">
          <p className="font-semibold text-neutral-200 sm:text-lg">
            {user.name ? truncateString(user.name, 12) : 'Usuário sem nome'}
          </p>
          <p className="text-sm text-neutral-400 sm:text-base">
            {user.email ? truncateString(user.email, 16) : 'Usuário sem e-mail'}
          </p>
        </div>
        <SignOutButton />
      </section>
      <div className="flex w-full flex-col p-3">
        <h2 className="mb-1.5 flex items-center text-lg font-medium text-neutral-300">
          <BookMarked className="mr-2 h-5 w-5" /> Seus repositórios
        </h2>
        <div className="space-y-1 divide-y-2 divide-neutral-700">
          {repos
            .sort(
              (a, b) =>
                new Date(b.updated_at ?? 0).getTime() -
                new Date(a.updated_at ?? 0).getTime(),
            )
            .map((repo) => (
              <div key={repo.id} className="p-2">
                <GithubRepository repo={repo} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

function UserImage({
  src,
  name,
}: {
  src?: string | null
  name?: string | null
}) {
  return (
    <div className="relative mx-3 h-16 w-16">
      <Image
        src={src ?? 'https://www.svgrepo.com/show/508196/user-circle.svg'}
        alt={`image of ${name}`}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  )
}
