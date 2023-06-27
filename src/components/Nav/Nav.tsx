'use client'
import { Li } from './NavLi'
import { Links } from './domain/const'

export const Nav = () => {
  return (
    <nav className='relative'>
      <ul className='flex justify-between w-screen gap-0 p-2 font-bold text-white bg-blue1 md:gap-5 md:w-auto md:bg-inherit'>
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
  )
}
