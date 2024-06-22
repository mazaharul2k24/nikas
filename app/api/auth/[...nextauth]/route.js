import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const providerOption={
  providers:[
    CredentialsProvider({
      name:"HISAB",
      credentials:{},
      
      
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: credentials.email }
        console.log(user.email)
      
    }
    
  })
  ],
  page:{
    signIn:"/login"
  }
}

const providerA=nextAuth(providerOption)
export {providerA as GET,providerA as POST}