import Image from 'next/image'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center min-w-full border-b mb-12 border-gray-50 bg-white ">
      <div className="mx-auto w-full max-w-7xl flex items-center gap-8 p-6 sm:px-4 sm:py-8 bg-slate-300">
        <Image
          src={'/Variant=Dark.svg'}
          alt=""
          width={105}
          height={42}
          quality={100}
        />
        <div className="w-[800px] h-12 bg-white"></div>
      </div>
    </div>
  )
}
