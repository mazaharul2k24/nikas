import { NextResponse } from "next/server";
import { hiabModel } from "@/app/config/HisabInvoicemodel";
import { Dbconnect } from "@/app/_mongoConfig/MongoCon";

export async function GET(req){
    try {
        await Dbconnect();
        const getDataquery=await hiabModel.find()
        if(getDataquery){
            return NextResponse.json({message:"successfully get all data ",data:getDataquery},{status:200})
        }else{
            return NextResponse.json({message:"unsuccessfully get all data ",data:null},{status:204})
        }
     
        
    } catch (error) {
        return NextResponse.json({message:"Server error get all data "},{status:500})
    }
}