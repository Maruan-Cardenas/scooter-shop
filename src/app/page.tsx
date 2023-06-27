import { Header } from '../components/Header'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <header className='w-[90%] flex flex-col gap-5'>
        <h1 className='text-4xl font-bold text-center'>Mejores patinetes eléctricos del 2023</h1>
        <p>
          Muévete con total libertad por tu ciudad, ahorrando en consumo y sin atascos con tú nuevo patinete. patinete eléctrico.
        </p>
        <p>
          En nuestra tienda encontrarás los mejores patinetes de todas las marcas, ademas de los mejores recambio. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...
        </p>
      </header>
    </main>
  )
}
