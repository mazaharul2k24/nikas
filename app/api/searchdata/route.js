import { NextResponse } from "next/server";
import { hiabModel } from "@/app/config/HisabInvoicemodel";
import { Dbconnect } from "@/app/_mongoConfig/MongoCon";

 export async function POST(req){
try {
   await Dbconnect();
    const {setext}=await req.json()
   
     const searchQuery=await hiabModel.find({buyerPhone:setext})
     console.log(searchQuery)
     if(searchQuery.length>0){
        return NextResponse.json({message:"Success",data:searchQuery},{status:200})
     }else{
        return NextResponse.json({message:"Faild search",data:null},{status:202})
     }
   
} catch (error) {
    return NextResponse.json({message:"Sever occourd",data:null},{status:500})
}
}