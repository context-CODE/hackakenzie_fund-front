'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
}

interface CustomButtonProps {
  children: ReactNode
  Size?: 'sm' | 'md'
  className?: string
}

const sm = 'h-8 p-1 min-w-[32px]'
const md = 'h-12 p-3 min-w-[48px]'

const Button = ({ children, className = '' }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg justify-center items-center gap-2 inline-flex text-center text-base font-semibold ${className}`}
    >
      {children}
    </button>
  )
}

export const BlurButton = ({
  children,
  Size = 'md',
  className = ''
}: CustomButtonProps) => {
  return (
    <Button
      className={`bg-black bg-opacity-25 text-white ${
        Size === 'sm' ? sm : md
      }  ${className}`}
    >
      {children}
    </Button>
  )
}

export const SolidButton = ({
  children,
  Size = 'md',
  className = ''
}: CustomButtonProps) => {
  return (
    <Button
      className={`bg-slate-800 hover:bg-slate-700 text-white ${
        Size === 'sm' ? sm : md
      } ${className}`}
    >
      {children}
    </Button>
  )
}

export const AlphaButton = ({
  children,
  Size = 'md',
  className = ''
}: CustomButtonProps) => {
  return (
    <Button
      className={`bg-black bg-opacity-5 text-black ${
        Size === 'sm' ? sm : md
      }  ${className}`}
    >
      {children}
    </Button>
  )
}

export const OrangeButton = ({
  children,
  Size = 'md',
  className = ''
}: CustomButtonProps) => {
  return (
    <Button
      className={`bg-orange-100 hover:bg-orange-200 text-orange-400 ${
        Size === 'sm' ? sm : md
      }  ${className}`}
    >
      {children}
    </Button>
  )
}
