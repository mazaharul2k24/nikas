import { NextResponse } from "next/server";
import { Hisab_user_model } from "@/app/config/model/Hisabmodel";
import { Dbconnect } from "@/app/_mongoConfig/MongoCon";

export const POST=async(req)=>{
try {
    await Dbconnect()
    const {id}=await req.json()
    const findactiveUSer=await Hisab_user_model.findOne({activationKey:id})

if(findactiveUSer){

  if(findactiveUSer.activationStatus=="verified"){
    return NextResponse.json({message:"Already verified  logig now"},{status:203})
  }else{
    findactiveUSer.activationStatus="verified"
    const saveActiveinfo= await findactiveUSer.save();
    if(saveActiveinfo){
     return NextResponse.json({message:"Successfully verified please logig now"},{status:200})
    }else{
     return NextResponse.json({message:"Faild to verify your email please try again"},{status:201})
    }
  }
   
}else{
    return NextResponse.json({message:"Invalid email address"},{status:202})
}
} catch (error) {
    return NextResponse.json({message:"Server error"},{status:500})
}
}