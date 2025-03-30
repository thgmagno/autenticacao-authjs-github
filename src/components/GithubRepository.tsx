import { Repo } from '@/types/repo'
import Link from 'next/link'
import { formatDistanceToNow, format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { truncateString } from '@/utils/truncateString'

export function GithubRepository({ repo }: { repo: Repo }) {
  const updatedDate = new Date(repo.updated_at)
  const now = new Date()
  const isRecent = now.getFullYear() === updatedDate.getFullYear()

  const formattedDate = isRecent
    ? `Updated ${formatDistanceToNow(updatedDate, { addSuffix: true, locale: enUS })}`
    : `Updated on ${format(updatedDate, 'MMM d, yyyy', { locale: enUS })}`

  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center">
        <Link
          href={repo.html_url}
          className="mr-2 font-bold text-blue-500 hover:underline"
          target="_blank"
        >
          {truncateString(repo.name)}
        </Link>
        <span className="cursor-default rounded-full border bg-neutral-900 px-2 text-xs capitalize opacity-70 select-none">
          {repo.visibility}
        </span>
      </div>
      <div className="flex flex-col space-x-2.5 sm:flex-row sm:items-center">
        <span className="flex items-center text-sm text-neutral-400">
          <div className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
          {repo.language}
        </span>
        <span className="text-sm text-neutral-400">{formattedDate}</span>
      </div>
    </div>
  )
}
