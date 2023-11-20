import Image from 'next/image'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center min-w-full border-b mb-12 border-gray-50 bg-white ">
      <div className="mx-auto w-full max-w-7xl flex items-center gap-8 p-6 sm:px-4 sm:py-8">
        <Link href="/">
          <Image
            className="w-[105px] h-[42px]"
            src={'/Variant=Dark.svg'}
            alt=""
            width={210}
            height={84}
            quality={100}
          />
        </Link>
        <div className="w-full h-12 p-3 rounded-lg border-2 border-black border-opacity-20 justify-start items-center gap-4 inline-flex">
          <IoSearch className="text-2xl text-gray-400" />
          <input
            className="w-full h-full text-gray-400 text-lg font-medium bg-transparent outline-none"
            placeholder="Pesquisar"
          />
        </div>
        <div className="flex min-w-fit gap-2">
          <button className=" h-12 p-3 bg-orange-400 bg-opacity-25 rounded-lg justify-center items-center gap-2 inline-flex text-orange-400 text-base font-semibold">
            <PiShoppingCartSimpleFill className="w-6 h-6" />
            Cart
          </button>
          <button className="h-12 p-3 bg-black rounded-lg justify-center items-center gap-2 text-center text-white text-base font-semibold">
            Log In/Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
