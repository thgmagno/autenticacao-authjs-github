'use client'

import { IconGithub } from './icon/IconGithub'
import { signIn } from 'next-auth/react'

export function GithubAuthButton() {
  return (
    <div className="my-12 flex items-center justify-center">
      <button
        onClick={() => signIn('github')}
        className="flex cursor-pointer items-center justify-center gap-4 rounded-md bg-neutral-950/80 p-4 font-semibold tracking-wider"
      >
        <IconGithub />
        Login com GitHub
      </button>
    </div>
  )
}
