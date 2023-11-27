import Image from 'next/image'
import Link from 'next/link'

export function CategoryCard() {
  return (
    <Link
      href={'/categoria/cadeiras'}
      className="relative min-w-[373.33px] w-[373.33px] h-[184px] rounded-2xl sm:min-w-[150px] sm:w-[150px] sm:h-[75px] flex-col justify-center items-start inline-flex overflow-hidden"
    >
      <Image
        src={'/temp/category-images/Lounge-Chair-Ottoman-Mahogany.png'}
        alt=""
        layout="fill"
        objectFit="cover"
        quality={100}
      ></Image>
      <h4
        className="text-white text-xl sm:text-base font-semibold absolute left-6 sm:left-4"
        style={{ textShadow: '0 0 4px rgba(0, 0, 0, 1)' }}
      >
        Cadeiras
      </h4>
    </Link>
  )
}
