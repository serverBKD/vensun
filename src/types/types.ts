import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { StaticImageData } from "next/image"
import { UrlObject } from "url"

//. Interfaces

interface Imagen {
  image: string | StaticImageData | StaticImport
  alt?: string
  width?: number
  height?: number
  url?: string | UrlObject
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
type basicString = string | any | UrlObject

export type {
  Imagen,
  Card,
  CardTwoBlock,
  LinkItems,
  RenderHome,
  numGRID,
  basicString
}