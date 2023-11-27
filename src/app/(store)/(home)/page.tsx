import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'

import { CategoryCard } from '@/components/category-card'
import ContainerApp from '@/components/container-app'
import ContainerBanner from '@/components/container-banner'
import { ProductCard } from '@/components/product-card'

export default function Home() {
  return (
    <ContainerApp>
      <ContainerBanner>
        <div>
          <h3 className="text-black text-2xl sm:text-xl font-semibold">
            Categorias
          </h3>
        </div>
        <div className="flex gap-4 w-full max-w-7xl items-center overflow-x-hidden">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </ContainerBanner>
      <ContainerBanner>
        <div className="flex gap-8 items-center">
          <h3 className="text-black text-2xl sm:text-xl font-semibold">
            Mais vendidos
          </h3>
          <Link
            href={'/'}
            className="text-right text-orange-400 text-sm font-normal"
          >
            Exibir todos{' '}
            <IoIosArrowRoundForward className={'inline-block w-4 h-4'} />
          </Link>
        </div>
        <div className="flex gap-4 mx-auto w-full max-w-7xl items-center overflow-x-hidden">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </ContainerBanner>
      <ContainerBanner>
        <Link
          href={'/'}
          className=" min-h-[252px]  sm:min-h-[118px] w-auto min-w-[358px] relative overflow-hidden rounded-2xl"
        >
          <Image
            src={'/temp/banners/banner-promo-category.png'}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          ></Image>
          <div className="absolute h-full flex-col justify-center items-start inline-flex left-6 sm:left-4">
            <h3 className="text-black text-5xl font-bold leading-[72px] sm:text-2xl sm:leading-9">
              Oferta
            </h3>
            <p className="text-black text-base font-normal">
              Todas as cadeiras até
            </p>
            <p className="text-black text-2xl font-semibold sm:text-base">
              50% off
            </p>
            <p className="sm:hidden text-right text-black text-base font-normal">
              Saiba mais{' '}
              <IoIosArrowRoundForward className={'inline-block w-4 h-4'} />
            </p>
          </div>
        </Link>
      </ContainerBanner>
    </ContainerApp>
  )
}
