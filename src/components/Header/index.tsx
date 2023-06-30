import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header title='header' className='flex flex-col items-center justify-between w-screen gap-5 p-5 bg-blue2 md:h-20 md:flex-row md:gap-0'>
      <Image className='w-96' src={logo} alt='Logo de Todo Patinete' />
      <Nav />
    </header>
  )
}
