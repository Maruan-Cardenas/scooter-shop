import ButtonReviewScooter from './ButtonReviewScooter'
import { ButtonReviewScooterItems } from './domain/const'

export const Home = () => {
  return (
    <>
      <header className='w-[90%] flex flex-col gap-5 md:w-[70%]'>
        <h1 className='pt-10 text-4xl font-bold'>¿Buscas un patinete eléctrico?</h1>
        <p>
          Muévete con total libertad por tu ciudad, ahorrando en consumo y sin atascos con tú nuevo patinete. patinete eléctrico.
        </p>
        <p>
          En nuestra tienda encontrarás los mejores patinetes de todas las marcas, ademas de los mejores recambio. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...
        </p>
      </header>
      <section className='w-[90%] md:w-[70%]'>
        <h2 className='pt-10 text-3xl font-bold'>Análisis de los mejores scooter eléctricos del 2023</h2>
        {
          ButtonReviewScooterItems.map((item) => (
            <ButtonReviewScooter
              key={item.id}
              scooterImg={item.scooterImg}
              scooterAlt={item.scooterAlt}
              title={item.title}
              link={item.link}
            />
          ))
        }
      </section>
    </>
  )
}
