import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ButtonReviewScooterProps } from './domain/types'

const ButtonReviewScooter: React.FC<ButtonReviewScooterProps> = ({ scooterImg, scooterAlt, title, link }) => {
  return (
    <div className='h-full my-10'>
      <Link className='flex flex-col justify-between w-full h-full' href={link}>
        <Image className='object-cover w-full md:h-full' src={scooterImg} alt={scooterAlt} />
        <h3 className='w-full text-2xl font-bold text-center'>{title}</h3>
      </Link>
    </div>
  )
}

export default ButtonReviewScooter
