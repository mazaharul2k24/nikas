import { Hisab_user_model } from "@/app/config/model/Hisabmodel";
import { Dbconnect } from "@/app/_mongoConfig/MongoCon";
import { NextResponse } from "next/server";
import Randomstring from "randomstring";
import Bcrypt from "bcrypt"
import { sendEmail } from "./Nodemailer";
export const POST = async (req) => {
  try {
    await Dbconnect()
    const { userData } = await req.json();
    const { name, email, phone, password, currency,address } = userData;
    const datetimeMaker =
      new Date().toLocaleDateString().toString() +
      " - " +
      new Date().toLocaleTimeString().toString();
    const machQuery = await Hisab_user_model.findOne({ email: email });
    if (!machQuery) {
        const hastPasww=await Bcrypt.hash(password,10)
        const genActivekey=Randomstring.generate(12)
      const insertQuery = new Hisab_user_model({
        id:
          "hisab-" + Randomstring.generate({ length: 6, charset: ["numeric"] }),
        name: name,
        email: email,
        phone: phone,
        address: address,
        currency: currency,
        password: hastPasww,
        profileInfo: {
          profileUrl: "",
          profileSign: "signature",
        },
        creationDatae: datetimeMaker,
        activationKey:genActivekey,
        activationStatus:"non-verified"
        
      });
      const saveQuiry = await insertQuery.save();
      if (saveQuiry) {
       const responce=await  sendEmail(email,genActivekey)
       if(responce.status==200){
        return NextResponse.json(
            { message: "Successfully create account ",emailStatus:responce.message },
            { status: 200 }
          );
       }else if(responce.status==402){
                console.log(responce.message)
            }
      } else {
        return NextResponse.json(
          { message: "Faild to create account try again leter" },
          { status: 201 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Already have an account" },
        { status: 202 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
