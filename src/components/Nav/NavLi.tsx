import Link from 'next/link'
import React, { useState } from 'react'
import { LiProps } from './domain/types.d'

export const Li: React.FC<LiProps> = ({ id, principalLi, secondaryLi }) => {
  const [isOpen, setIsOpen] = useState('')
  return (
    <li
      className='left-0'
      onMouseEnter={() => setIsOpen(principalLi.name)}
      onMouseLeave={() => setIsOpen('')}
    >
      {principalLi.name}
      {(isOpen === principalLi.name && secondaryLi) && (
        <ul className='absolute left-0 flex flex-col w-full gap-2 p-2 bg-blue1'>
          {
              secondaryLi?.map((li) => (
                <li
                  key={id}
                >
                  <Link
                    href={`${principalLi.link}/${li.link}`}
                  >
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
