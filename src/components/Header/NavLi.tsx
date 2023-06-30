import { ArrowDown } from '@/utils/svg'
import Link from 'next/link'
import React, { useState } from 'react'
import { LiProps } from './domain/types.d'

export const Li: React.FC<LiProps> = ({ id, principalLi, secondaryLi }) => {
  const [isOpen, setIsOpen] = useState('')
  return (
    <li
      className='left-0 flex flex-col items-start md:flex-row md:h-20 md:items-center'
      onMouseEnter={() => setIsOpen(principalLi.name)}
      onMouseLeave={() => setIsOpen('')}
      onClick={() => setIsOpen(isOpen === principalLi.name ? '' : principalLi.name)}
    >
      <div className='flex justify-between items-center gap-2 text-lg w-[40%] md:w-auto md:gap-0 [&>svg]:fill-current [&>svg]:text-white'>
        <Link href={principalLi.link}>
          {principalLi.name}
        </Link>
        {secondaryLi && <ArrowDown />}
      </div>
      {(isOpen === principalLi.name && secondaryLi) && (
        <ul className='static left-0 flex flex-col w-full gap-2 p-2 md:absolute md:top-[5.5rem] md:bg-blue1 md:rounded-b-md'>
          {
              secondaryLi?.map((li) => (
                <li key={id}>
                  <Link href={`${principalLi.link}/${li.link}`}>
                    {li.name}
                  </Link>
                </li>
              ))
          }
        </ul>
      )}
    </li>
  )
}
