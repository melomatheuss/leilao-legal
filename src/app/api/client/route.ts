import { NextResponse } from 'next/server'
import client from '../../../../prisma/clienteDb'
 
export async function GET(request: Request) {


    const res = await client.user.create({
        data:{
            name: "matheus",
            email: "matheus@exemple.com"
        }
    })
    
    return new NextResponse(JSON.stringify(res) )
    //return NextResponse.json({ res })
}