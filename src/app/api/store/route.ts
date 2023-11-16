import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/db/prisma.ts'
import { Product } from '@/types/types'

// interface Params {
//   params: { id: string }
// }

export async function GET(NextRequest:NextRequest) {
    try {
        // const queryData = await prisma.product.findMany()
        const req = NextRequest.nextUrl.basePath
        return NextResponse.json(req)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                message: 'error.messxage'
            }, {
                status: 500
            })
        }
    }

}

export async function POST(request: NextRequest) {
    const {
        fullname,
        description,
        modelo,
        marca,
        img,
        warehouse, 
        price_base,           
        price_sell,         
        divisa,
        stock,
        unity,       
        serial,        
        barcode ,      
        sku,         
        weigth,         
        dimension,   
        nota,        
        tags    
    }: Product = await request.json()
    return NextResponse.json(await request.body)
    try {
        const newProduct = await prisma.product.create({
            data:  {
                fullname,
                description,
                modelo,
                marca,
                img,
                warehouse, 
                price_base,           
                price_sell,         
                divisa,
                stock,
                unity,       
                serial,        
                barcode ,      
                sku,         
                weigth,         
                dimension,   
                nota,        
                tags 
            }
        }
        )
        return NextResponse.json(newProduct)
    } catch (error) {
        if (error instanceof Error)
        {
            return NextResponse.json({
                message: 'error.message'
            },
            {
                status: 500
            })
        }
    }
}


export function PUT () {
    return NextResponse.json(
        {
            message: 'Update successly'
        }
    )
}

export function DELETE () {
    return NextResponse.json(
        {
            message: 'Delete successly'
        }
    )
}


// {
//     fullname,
//     description,
//     modelo,
//     marca,
//     img,
//     warehouse, 
//     price_base,           
//     price_sell,         
//     divisa,
//     stock,
//     unity,       
//     serial,        
//     barcode ,      
//     sku,         
//     weigth,         
//     dimension,   
//     nota,        
//     tags    
// }