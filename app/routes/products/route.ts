import { NextResponse } from "next/server"
import { products } from "@/app/ProductData"

export async function GET(){
    return NextResponse.json({...products},{status:200})
}