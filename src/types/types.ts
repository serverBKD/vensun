import { StaticImageData } from "next/image"

//. Interfaces

interface Imagen {
  image: string | StaticImageData
  alt?: string 
  width?: number
  height?: number
  url?: string
}
interface Card extends Imagen{
  id?: number
  fullname: string
  description: string
  price?: number
  rating?: string | {}
  category?: string
}

interface CardTwoBlock extends Card{
  ordenBlock: string
  colorBg: string
  colorText: string
}
interface LinkItems {
  linkName?: string 
  linkSrc?: string | StaticImageData
  linkUrl: string
} 

//. Types

type RenderHome = boolean | any
type numGRID = number | any

export type {
  Imagen,
  Card,
  CardTwoBlock,
  LinkItems,
  RenderHome,
  numGRID
}