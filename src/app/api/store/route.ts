import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/db/prisma.ts'

interface Params {
  params: { id: string }
}

export async function GET() {
    try {
        const queryData = await prisma.product.findMany()
        return NextResponse.json(queryData)
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
    try {
        const { fullname, description, modelo, marca, price1 } = await request.json()
        const newProduct = await prisma.product.create({
            data: {
                fullname,
                description,
                modelo,
                marca,
                price1
            }
        })
        return NextResponse.json(newProduct)
    } catch (error) {
        if (error instanceof Error)
        {
            return NextResponse.json({
                message: error.message
            },
            {
                status: 500
            })
        }}
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
