import nodemailer from "nodemailer";

 export const sendEmail=async(email,genActivekey)=>{
  try {
    const activeLink="http://192.168.1.105:3000/register/active-account/"
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "freelancermazaharul1@gmail.com",
          pass: "xptt cdyz votj bcby",
        },
      });

      const info = await transporter.sendMail({
        from: '"Hisab🔥"<freelancermazaharul1@gmail.com>',
        to: email, // list of receivers
        subject: "Account activation", // Subject line
        html: `<p style="line-height:24px">Welcome to HISAB! Please activate your account to complete your registration. Click the link below to verify your email and get started. Thank you for joining us!
             Activate your account: <a href=${activeLink+genActivekey} >Active</a></p>`
      });
      if(info){
        return({message:"Please verify your email to complete registration🚀. Check your email : "+email ,status:200})
      }else{
        return({message:"Faild to send email",status:402})
      }

  } catch (error) {
    return({message:"Error send email",status:500})
  }

}

