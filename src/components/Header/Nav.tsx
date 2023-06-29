'use client'
import { MenuClose, MenuOpen } from '@/utils/svg'
import { useState } from 'react'
import { Li } from './NavLi'
import { Links } from './domain/const'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='relative flex md:w-auto'>
      <nav className='relative z-10 w-screen h-0 bg-blue1 md:w-auto md:h-20 md:flex md:bg-transparent md:items-center'>
        <ul className={`absolute ${isOpen ? 'left-[-150%]' : 'left-0'} md:left-0 flex flex-col bg-inherit justify-between w-screen gap-4 p-2 font-bold text-white md:gap-5 md:w-auto md:bg-inherit md:flex-row md:relative`}>
          {Links.map((link) => (
            <Li
              key={link.id}
              id={link.id}
              principalLi={link.principalLi}
              secondaryLi={link.secondaryLi}
            />
          ))}
        </ul>
      </nav>
      <button
        className='fixed bottom-10 right-5 flex justify-center items-center z-10 bg-redTransparent backdrop-blur-sm w-14 h-14 rounded-full [&>svg]:fill-current [&>svg]:text-black [&>svg]:w-12 md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          isOpen ? <MenuOpen /> : <MenuClose />
        }
      </button>
    </div>
  )
}
