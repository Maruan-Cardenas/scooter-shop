export const Links = [
  {
    id: crypto.randomUUID(),
    principalLi: {
      link: '/',
      name: 'Home'
    }
  },
  {
    id: crypto.randomUUID(),
    principalLi: {
      link: '/recambios',
      name: 'Recambios'
    },
    secondaryLi: [
      {
        link: '/ruedas',
        name: 'Ruedas'
      },
      {
        link: '/baterias',
        name: 'Baterías'
      },
      {
        link: '/cargadores',
        name: 'Cargadores'
      },
      {
        link: '/motores',
        name: 'Motores'
      },
      {
        link: '/frenos',
        name: 'Frenos'
      },
      {
        link: '/guardabarros',
        name: 'Guardabarros'
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    principalLi: {
      link: '/resenas',
      name: 'Reseñas'
    },
    secondaryLi: [
      {
        link: '/smartgyro-speedway',
        name: 'Smartgyro Speedway V3.0'
      },
      {
        link: '/quickwheel-explorer',
        name: 'QuickWheel Explorer 6000w'
      },
      {
        link: '/xiaomi-electric-scooter-3-lite',
        name: 'Xiaomi Scooter 3 Lite'
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    principalLi: {
      link: '/consejos',
      name: 'Consejos'
    },
    secondaryLi: [
      {
        link: '/como-cambiar-ruedas-de-scooter',
        name: 'Cómo cambiar las ruedas de tú patinete eléctrico'
      }
    ]
  }
]
