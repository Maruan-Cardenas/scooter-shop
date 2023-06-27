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
  }
]
