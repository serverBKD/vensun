import { NextResponse } from 'next/server'
import { prisma } from '@/db/prisma.ts'

export async function GET() {
    try {
        const queryData = await prisma.Product.findMany()
        return NextResponse.json(
            {
                queryData
            }
        )} catch (error) {
        if (error instanceof Error){
            return NextResponse.json(
                {message: error.message}
            )
        }
    }

}

export function POST () {
    return NextResponse.json(
        {
            message: 'Create successly'
        }
    )
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
