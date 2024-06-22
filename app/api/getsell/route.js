// import { NextResponse } from "next/server";
// import { hiabModel } from "@/app/config/HisabInvoicemodel";
// import { Dbconnect } from "@/app/_mongoConfig/MongoCon";

// export const GET=async(req)=>{
//     await Dbconnect();
//     try {
//        const todatSell=await hiabModel.find({insertDate:new Date().toLocaleDateString().toString()})
//        if(todatSell.length>0){
//         return NextResponse.json({message:"Successfull data get",data:todatSell},{status:200})
//        }else{
//         return NextResponse.json({message:"faild to sell data get",data:null},{status:201})
//        }
//     } catch (error) {
//         return NextResponse.json({message:"Server error",data:null},{status:500})
//     }
// }