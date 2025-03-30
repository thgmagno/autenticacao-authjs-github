'use client'

import { Power } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      title="Sair"
      className="cursor-pointer rounded-lg border border-neutral-600 p-1.5 text-sm font-bold hover:bg-red-900"
    >
      <Power className="h-5 w-5 text-neutral-300" />
    </button>
  )
}
