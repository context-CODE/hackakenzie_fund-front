import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

interface CustomButtonProps {
  children: React.ReactNode
  Size?: 'sm' | 'md'
}

const Button = ({ children, className = '' }: Readonly<ButtonProps>) => {
  return (
    <button
      className={`rounded-lg justify-center items-center gap-2 inline-flex text-center text-base font-semibold ${className}`}
    >
      {children}
    </button>
  )
}

export const BlurButton = ({ children, Size = 'md' }: CustomButtonProps) => {
  return (
    <Button
      className={`bg-black bg-opacity-25 text-white ${
        Size === 'sm' ? 'h-8 p-1 min-w-[32px]' : 'h-12 p-3 min-w-[48px]'
      }`}
    >
      {children}
    </Button>
  )
}

export const SolidButton = ({ children, Size = 'md' }: CustomButtonProps) => {
  return (
    <Button
      className={`bg-black text-white ${
        Size === 'sm' ? 'h-8 p-1 min-w-[32px]' : 'h-12 p-3 min-w-[48px]'
      }`}
    >
      {children}
    </Button>
  )
}

export const AlphaButton = ({ children, Size = 'md' }: CustomButtonProps) => {
  return (
    <Button
      className={`bg-black bg-opacity-5 text-black ${
        Size === 'sm' ? 'h-8 p-1 min-w-[32px]' : 'h-12 p-3 min-w-[48px]'
      }`}
    >
      {children}
    </Button>
  )
}

export const OrangeButton = ({ children, Size = 'md' }: CustomButtonProps) => {
  return (
    <Button
      className={`bg-orange-400 bg-opacity-25 text-orange-400 ${
        Size === 'sm' ? 'h-8 p-1 min-w-[32px]' : 'h-12 p-3 min-w-[48px]'
      }`}
    >
      {children}
    </Button>
  )
}
