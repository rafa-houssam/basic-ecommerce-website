import { NextRequest, NextResponse } from "next/server"
import { products } from "@/app/ProductData"


type Params={
    id:string
}
type ShoppingCart=Record<string,string[]>
const carts:ShoppingCart={
    '1':['123','234'],
    '2':['345','456'],
    '3':['123'],
}

export async function GET(request:NextRequest,{params}:{params:Params}){
    const userId=params.id
    const productIds=carts[userId]
    if(productIds==undefined){
        return NextResponse.json({"no products":[]},{status:200})
    }
    const userProducts=productIds.map(id=>products.find(p=>p.id==id))
    return NextResponse.json({userProducts},{status:200})


}