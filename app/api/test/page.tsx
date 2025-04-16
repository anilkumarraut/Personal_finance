import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse, 
    { parms json({ message: "Hello, world!" });
}

export async function POST(request: Request) {
    const { name } = await request.json();
    return NextResponse.json({ message: `Hello, ${name}!` });
}



