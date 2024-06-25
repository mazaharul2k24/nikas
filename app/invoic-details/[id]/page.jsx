"use client"
import { Tiro_Bangla,Anek_Bangla } from 'next/font/google'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import Link from 'next/link'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




const AnkeBnagla=Anek_Bangla({
  weight:['400',"500","600"],
  style:["normal"],
  subsets:["bengali","latin","latin-ext"]
})

export default function Invoicepage() {
  
  const {id}=useParams()
const [invoiceData,setInvoicedata]=useState([])
const [invoicepData,setInvoicepdata]=useState([])
  useEffect(()=>{
    fetch("/api/getinvoicedata",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({id})
    }).then((res)=>{
     return res.json().then((result)=>{
      setInvoicedata(result.data)
      setInvoicepdata(result.data.buyerProduct)
     })
     
    }).catch((Err)=>{
      console.log(Err)
    })
  },[id])

  const totalAmount=invoicepData.reduce((acc,curr)=>acc+Number(curr.pPrice*curr.pQuantity),0)

  var no=1;
  var nowDate=new Date().toLocaleDateString()
  return (
    <>

{invoiceData && invoicepData ? (
      <div className="my-6 mt-8 ">
      <div className="invoiceHear pb-8 pt-8 md:w-[50%] w-[95%] mx-auto border rounded-md  px-4">
        <div className="inH flex items-center justify-between  border-b py-3">
          <div className="ilft ">
          <div className='flex gap-2'>  <b>Invoice No :</b> <p> #{id}</p></div>
          <div className='flex gap-2'>  <b>Date : </b> <p> {nowDate}</p></div>
          </div>
        <div className="r">
      <Image src='/3010221.webp' alt='invoice logo' width={120} height={100}></Image>
        </div>
        </div>
  
      <div className="inSub flex items-center justify-between my-4 ">
      <div className="ilft w-[55%]  text-justify leading-6">
        <b>Invoice To: :</b>
          <p>Jennifer Richard</p>
          <p className='text-justify'>365 Bloor Street East, Toronto,
              Ontario, M4W 3L4,
             </p>
          <p>Canada</p>
  
        
          </div>
        <div className="r w-[45%]  text-right leading-6">
        <b>Pay To: :</b>
          <p>{invoiceData.buyerName}</p>
          <p>{invoiceData.buyerPhone}</p>
          <p>{invoiceData.buyerAddress} </p>
        </div>
      </div>
  
  <div className="inTable border rounded-md ">
      <Table className="w-[600px] rounded-lg print:w-full md:w-full" >
        <TableHeader>
          <TableRow className="text-md bg-gray-50 ">
            <TableHead className="w-[40px] text-gray-700">No.</TableHead>
            <TableHead className="w-[200px] text-gray-700">Date</TableHead>
            <TableHead className="text-gray-700">Name</TableHead>
            <TableHead className="text-gray-700">Price</TableHead>
            <TableHead className="text-gray-700">Quentity</TableHead>
            <TableHead className="text-gray-700">Status</TableHead>
            <TableHead className="text-right text-gray-700">Amount</TableHead>
          </TableRow>
        </TableHeader>
      <TableBody>
          {invoicepData.map((invoice) => (
            <TableRow >
              <TableCell className="font-medium">{no++}</TableCell>
              <TableCell className="font-medium">{invoiceData.insertDate}</TableCell>
            
              <TableCell>{invoice.pName}</TableCell>
              <TableCell className="flex">{invoice.pPrice} BDT</TableCell>
              <TableCell >{invoice.pQuantity}.{invoice.quantityType}</TableCell>
              <TableCell >{invoiceData.buyerStatus=="paid"?<p className="bg-green-50 py-1 w-fit px-3 rounded-full" >Paid</p>:<p  className="bg-red-50 py-1 w-fit px-3 rounded-full"> Baki</p>}</TableCell>
              <TableCell className="text-right">{parseInt(invoice.pPrice*invoice.pQuantity)} BDT</TableCell>
            </TableRow>
          ))}
        </TableBody>  
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}><b>Total</b></TableCell>
            <TableCell colSpan={2} className="text-right text-md text-gray-800 font-bold ">{invoiceData.buyerStatus=="paid"?<p>{parseInt(totalAmount)} BDT</p>:<p className='text-red-600'>{parseInt(totalAmount)} BDT</p>}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
  
  </div>
  <div className="tableFooter flex items-center md:w-[80%] mx-auto justify-between my-10 print:my-8">
    <div className="letsign w-fit ">
      <p className=' border-dashed border-b border-gray-500 text-black font-bold py-1 text-center w-full'><span className={AnkeBnagla.className}>মাজাহারুল</span> </p>
     <small> sighature here</small>
    </div>
    <div className="rightsymbol">
    <div className="letsign">
     <Image src={'/hisabinvoicelogo.png'} width={150} height={150} className='rounded-full'  alt='authority logo' />
    </div>
    </div>
  </div>   
  
  <div className="printSec print:hidden">
    <button onClick={()=>print()}  className='bg-gray-800 text-white py-2 px-8 rounded-md mx-auto block hover:bg-gray-700'>Print</button>
  </div>
      </div>
      </div>
):<b className='text-red-500 text-center font-bold mt-10 block'>No invoice found</b>}


    </>
  )
}
