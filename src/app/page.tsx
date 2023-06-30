import { Header } from '../components/Header'
import { Home as HomeComponent } from '../components/Home'

export default function Home () {
  return (
    <main className='flex flex-col items-center min-h-screen overflow-hidden'>
      <Header />
      <HomeComponent />
    </main>
  )
}
