import { NextResponse } from "next/server"
import { hiabModel } from "@/app/config/HisabInvoicemodel"
import Randomstring from "randomstring"
import { Dbconnect } from "@/app/_mongoConfig/MongoCon"
export async function POST(req){
   try {
    await Dbconnect();
const uuid=Randomstring.generate({length: 10,charset: 'numeric'})
    const {productdata,buyer}=await req.json()
    const newuserQ=new hiabModel({
        buyerID:uuid,
        buyerName:buyer.name,
        buyerPhone:buyer.phone,
        buyerAddress:buyer.address,
        buyerStatus:buyer.status,
        insertDate:new Date().toLocaleDateString(),
        buyerProduct:productdata
    })
const saveData=await newuserQ.save()
if(saveData){
    return NextResponse.json({message:"success",data:saveData},{status:200})

}else{
    return NextResponse.json({message:"faild"},{status:405})

}

   } catch (error) {
    return NextResponse.json({message:"error"},{status:500})
   }

}