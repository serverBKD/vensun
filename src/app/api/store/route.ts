import { NextResponse } from "next/server"
export function GET() {
    return NextResponse.json(
        {
        message:"success"
    }
    )
}

export function POST() {
    return NextResponse.json(
        {
        message:"Create successly"
    }
    )
}

export function PUT() {
    return NextResponse.json(
        {
        message:"Update successly"
    }
    )
}

export function DELETE() {
    return NextResponse.json(
        {
            message:"Delete successly"
        }
    )
}