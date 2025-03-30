import Image from 'next/image'

export function Banner() {
  return (
    <div className="flex -translate-y-4 items-center justify-center">
      <Image
        src="/banner.svg"
        height={400}
        width={400}
        alt="authentication banner"
        priority
      />
    </div>
  )
}
