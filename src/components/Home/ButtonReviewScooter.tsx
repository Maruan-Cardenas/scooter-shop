import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ButtonReviewScooterProps } from './domain/types'

const ButtonReviewScooter: React.FC<ButtonReviewScooterProps> = ({ scooterImg, scooterAlt, title, link }) => {
  return (
    <div className='flex flex-col justify-center pt-10'>
      <Link href={link}>
        <Image className='w-full' src={scooterImg} alt={scooterAlt} />
        <h3 className='w-full text-2xl font-bold text-center'>{title}</h3>
      </Link>
    </div>
  )
}

export default ButtonReviewScooter
