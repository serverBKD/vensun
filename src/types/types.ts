import { StaticImageData } from "next/image"

//. Interfaces
interface Card {
  id?: number
  fullname: string
  description: string
  image: string | StaticImageData
  alt?: string
  width: number
  height: number
}

interface CardVentas extends Card{
  url: string
}

interface CardTwoBlock extends Card{
  ordenBlock: string
  colorBg: string
  colorText: string
}
interface NavBarListItems {
  linkName: string
  linkUrl: string
} 
//. Types

type RenderHome = boolean


export type {
  Card,
  CardVentas,
  CardTwoBlock,
  NavBarListItems,
  RenderHome
}