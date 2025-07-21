import { NextRequest, NextResponse } from "next/server"
import { products } from "@/app/ProductData"
type Params={
    id:string
}

export async function GET(request:NextRequest,{params}:{params:Params}){
    const productId=params.id
    const product=products.find(p=>p.id==productId)
    return NextResponse.json({product},{status:200})



}