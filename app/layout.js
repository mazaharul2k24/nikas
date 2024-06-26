import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ChakraPetch = Chakra_Petch({ subsets: ["latin"],weight:['300','400','500'] });

export const metadata = {
  title: "Hisab",
  description: "Generated by create mazaharul islam",
};



 export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={ChakraPetch.className}>
        <Header/>
        <div>
        {children}
        <ToastContainer/>
        </div>
     
        
        </body>
    </html>
  );
}
