'use client'

import React, { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonIcon?: boolean
  children: React.ReactNode
  click?: () => void
}

const Button = ({ children, buttonIcon, click, ...rest }: IButtonProps) => {
  if (buttonIcon) {
    return <button {...rest}>{children}</button>
  }

  return (
    <button
      onClick={click}
      className="m-auto mt-4 flex w-full max-w-md items-center justify-center gap-2 rounded-md bg-black py-4 text-white"
      {...rest}
    >
      <p>{children}</p>
    </button>
  )
}

export default Button
