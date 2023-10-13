import { StaticImageData } from "next/image"

//. Interfaces
interface Data {
  id: number
  fullname: string
  price: number
  description: string
  image: string
}
interface Text {
  title: string
  H5: string
}

interface TwoBlock {
  TitleBlock: string | number
  parrafBlock: string | number
  OrdenBlock: string
  imgURL: StaticImageData
  altIMG: string
  colorBg: string
  colorText: string
}
interface SizeX {
  width: width,
  height:height
}
interface Grid {
  imgURL: gridImg | string
  imgAlt: string
  imgLink: string
}

interface ImageType{
  alt: string
  src: string | StaticImageData
  width: number
  height: number
}

interface NavBarListItems {
  linkName: string
  linkUrl: string
} 

interface NavBarText{
  linkName: string
  linkUrl: string
}

//. Types

type Title = string
type StyleX = 'Style0' | 'Style1'
type width = '220px' | '320px' | '420px'
type height = 'auto' | '220px' | '320px' | '420px'
type numGRID = number
type Repo = {
  name: string
  stargazers_count: number
}
type gridImg = StaticImageData
type NavBarT = string


export type {
  Grid,
  Title,
  Text,
  Data,
  StyleX,
  SizeX,
  Repo,
  TwoBlock,
  ImageType,
  numGRID,
  NavBarT,
  NavBarListItems,
  NavBarText
}