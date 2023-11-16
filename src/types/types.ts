import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { StaticImageData } from 'next/image'
import { UrlObject } from 'url'

//. Interfaces

interface Imagen {
  image: string | StaticImageData | StaticImport | HTMLImageElement
  alt?: string
  width?: number
  height?: number
  url?: string | UrlObject
}
interface Card extends Imagen {
  id?: number
  fullname: string
  description: string
  price?: number
  rating?: string | object
  category?: string
}

export interface CardPages extends Imagen {
  id?: number
  fullname: string
  description: string
  price?: number
  rating?: string | object
  category?: string
  title: string
}

interface CardTwoBlock extends Card {
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

type numGRID = number
type basicString = string | UrlObject

export type {
    Imagen,
    Card,
    CardTwoBlock,
    LinkItems,
    numGRID,
    basicString,
}

export interface Product{
        fullname: string
        description: string
        modelo: string
        marca?: string
        img: string
        warehouse: string 
        price_base?: number           
        price_sell?: number           
        divisa?: string          
        stock?: number              
        unity?: string       
        serial?: string        
        barcode ?: string      
        sku?: string         
        weigth?: string         
        dimension?: string   
        nota?: string        
        tags?: string
}
