import Image from 'next/image'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'

import { OrangeButton, SolidButton } from './button'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 max-h-[97px] sm:max-h-[112px] flex items-center justify-center min-w-full border-b mb-12 border-gray-50 bg-white ">
      <div className="mx-auto w-full max-w-7xl flex items-center gap-8 p-6 sm:px-4 sm:py-8">
        <Link
          href="/"
          className="flex items-center justify-center max-h-[48px] max-w-[104px]"
        >
          <Image
            className="w-auto min-w-[104px] h-[63px]"
            src={'/Variant=Dark.svg'}
            alt=""
            width={210}
            height={84}
            quality={120}
          />
        </Link>
        <div className="sm:hidden w-full h-12 p-3 rounded-lg border-2 border-black border-opacity-20 justify-start items-center gap-4 inline-flex">
          <IoSearch className="text-2xl text-gray-400" />
          <input
            className="w-full h-full text-gray-400 text-lg font-medium bg-transparent outline-none"
            placeholder="Pesquisar"
          />
        </div>
        <div className="sm:hidden flex min-w-fit gap-2">
          <OrangeButton>
            <PiShoppingCartSimpleFill className="w-6 h-6" />
            Cart
          </OrangeButton>
          <SolidButton>Log In/Sign Up</SolidButton>
        </div>
      </div>
    </div>
  )
}
