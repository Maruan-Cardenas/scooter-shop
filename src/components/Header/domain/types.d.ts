type PrincipalLi = {
    link: string
    name: string
}

type SecondaryLi = {
    link: string
    name: string
}

export interface LiProps {
  id: string
  principalLi: PrincipalLi
  secondaryLi?: SecondaryLi[]
  }
