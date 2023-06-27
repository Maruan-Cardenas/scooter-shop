import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { Nav } from './Nav/Nav'

export const Header = () => {
  return (
    <header className='flex flex-col gap-5 justify-between items-center w-screen bg-blue2 md:flex-row md:gap-0'>
      <Image className='w-96 p-2' src={logo} alt='Logo de Todo Patinete' />
      <Nav />
    </header>
  )
}
