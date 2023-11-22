import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

interface CustomButtonProps {
  children: React.ReactNode
  Size?: 'sm' | 'md'
  className?: string
}

const sm = 'h-8 p-1 min-w-[32px]'
const md = 'h-12 p-3 min-w-[48px]'

const Button = ({ children, className = '' }: Readonly<ButtonProps>) => {
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
      className={`bg-black text-white ${Size === 'sm' ? sm : md} ${className}`}
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
      className={`bg-orange-400 bg-opacity-25 text-orange-400 ${
        Size === 'sm' ? sm : md
      }  ${className}`}
    >
      {children}
    </Button>
  )
}
