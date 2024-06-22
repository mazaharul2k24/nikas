import { NextResponse } from "next/server";
import { hiabModel } from "@/app/config/HisabInvoicemodel";
import { Dbconnect } from "@/app/_mongoConfig/MongoCon";


export const POST=async(res)=>{
    const {id}=await res.json()
    try {
        await Dbconnect()
        const getSingleuserdataQuery=await hiabModel.findOne({buyerID:id})
        if(getSingleuserdataQuery){
            return NextResponse.json({message:"success",data:getSingleuserdataQuery},{status:200})
        }else{
            return NextResponse.json({message:"Faild",data:null},{status:202})
        }
    } catch (error) {
        return NextResponse.json({message:"Error occourd",data:null},{status:500})
    }
}