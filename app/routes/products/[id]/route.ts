import { NextRequest, NextResponse } from "next/server"
import { products } from "@/app/ProductData"
type Params={
    id:string
}

export async function GET(request:NextRequest,{params}:{params:Params}){
    const productId=params.id
    const product=products.find(p=>p.id==productId)
    if(!product){
        return NextResponse.json({"error":"Product not found"},{status:404})
    }
    return NextResponse.json({product},{status:200})



}