import Image from 'next/image'
import { LuPlus } from 'react-icons/lu'

import { OrangeButton } from './button'

export function ProductCard() {
  return (
    <div className="min-w-[280px] w-[280px] sm:min-w-[171px] sm:w-[171px] bg-zinc-100 rounded-2xl relative">
      <figure className="w-full h-[276px] sm:h-[171px] rounded-2xl overflow-hidden">
        <Image
          src={'/temp/product-images/8b3d6a315f1658f889f7634bd028ea9d.png'}
          alt=""
          width={280}
          height={276}
          quality={100}
        />
      </figure>
      <div className="p-6 flex justify-between items-center">
        <div>
          <span className="text-neutral-400 text-xs font-semibold">SOFÁ</span>
          <p className="text-black text-base font-normal">Landskrona</p>
          <span className="text-neutral-400 text-base font-normal">$549</span>
          <span className="text-red-500 text-base font-semibold"> $499</span>
        </div>
        <OrangeButton className={'p-3 sm:absolute sm:top-[115px] sm:right-2'}>
          <LuPlus className={'w-full h-full'} />
        </OrangeButton>
      </div>
    </div>
  )
}
