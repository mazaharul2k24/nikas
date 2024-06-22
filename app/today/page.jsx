"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link"
import { useEffect, useState } from "react"

  export default function TableDemo() {
    const [invoices,setInvoices]=useState([])
    const [pro,setPro]=useState([])
    const [err,setErr]=useState("")
    useEffect(()=>{

      const getToday=async()=>{
        const res=await fetch("api/gettoday")
        if(res.ok){
         const jsCon=await res.json()
         if(res.status==200){
          setInvoices(jsCon.data.reverse())
          setPro(jsCon.productPirce)
         }else if(res.status==201){
           setErr(jsCon.message)
         }
        }else{
         console.log("erorr")
        }
      }
      getToday()

        },[])


  
          var emarr=[]
          var baki=[]
           invoices.map((inv)=>{
             if(inv.buyerStatus=="paid"){
               const aa=inv.buyerProduct.reduce((acc,curr)=>acc+Number(curr.pPrice*curr.pQuantity),0)
               emarr.push(aa)
             }else if(inv.buyerStatus=="baki"){
               const aa=inv.buyerProduct.reduce((acc,curr)=>acc+Number(curr.pPrice*curr.pQuantity),0)
               baki.push(aa)
             }
           })
           const toatalAmountPaid=emarr.reduce((acc,curr)=>acc+curr,0)
           const toatalAmountBki=baki.reduce((acc,curr)=>acc+curr,0)
      


  const totalPriceArr=[]
  pro.map((res)=>{
    const priceCal=res.buyerProduct.reduce((acc,curr)=>acc+Number(curr.pPrice*curr.pQuantity),0)
    totalPriceArr.push(priceCal)
  })

 const totalPrice=totalPriceArr.reduce((acc,curr)=>acc+curr,0)



    return (
  <>
  {invoices.length>0 && (
 <div>
     <h1 className="py-4 text-2xl font-bold text-center ">Today </h1>
<div className="w-[95%] p-2 md:w-[80%] mx-auto  shadow-md border rounded-md">
    <div className="statusBox grid grid-cols-3 gap-6 py-6 my-3 mx-auto w-fit items-center">
      <div className="box1 bg-green-300 text-gray-700 border rounded-md p-4  w-fit text-center ">
        <p>{toatalAmountPaid?toatalAmountPaid:"0000"} BDT </p>
        <b>Paid sell today</b>
      </div>
      <div className="box1 border bg-red-300 rounded-md p-4  text-gray-700  w-fit text-center">
        <p>{toatalAmountBki} BDT</p>
        <b>Baki sell today</b>
      </div>
      <div className="box1 border bg-purple-300 rounded-md text-gray-700 p-4  w-fit text-center">
        <p>{totalPrice?totalPrice:"0000"} BDT</p>
        <b>Total sell </b>
      </div>
     
    </div>

   <Table>
    <TableHeader className="bg-gray-100">
      <TableRow>
        <TableHead className="w-[100px]">Invoice No</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Phone</TableHead>
        <TableHead>Address</TableHead>
        <TableHead className="">Amount</TableHead>
        <TableHead className="text-center">Manage</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={Math.random()}>
          <TableCell className="font-medium">#{invoice.buyerID}</TableCell>
          <TableCell>{invoice.insertDate}</TableCell>
          <TableCell className="font-medium py-3">{invoice.buyerStatus=="paid"?<p  className=" bg-teal-100 py-1 px-3  w-fit rounded-full text-gray-900">Paid</p>:<p className="bg-rose-100 py-1 px-3  w-fit rounded-full text-gray-900">Baki</p>}</TableCell>
          <TableCell>{invoice.buyerName}</TableCell>
          <TableCell>{invoice.buyerPhone}</TableCell>
          <TableCell>{invoice.buyerAddress}</TableCell>
          <TableCell >
            {parseInt(invoice.buyerProduct.reduce((acc,curr)=>acc+Number(curr.pPrice*curr.pQuantity),0))} BDT
            </TableCell>
            <TableCell className="text-center"> 
            <Link
            href={`/invoic-details/${invoice.buyerID}`}
            type="submit"
            className="bg-gray-700 py-1 px-6 text-white rounded-sm hover:bg-gray-600 hover:text-gray-200  "
          >
            View
          </Link>
            </TableCell>
        </TableRow>
      ))}
    </TableBody>
   
  </Table>
  
</div>
 </div>

  )}
  {err && <p className="text-red-500 mt-32 font-semibold text-center">{err}</p>}
  </>
    )
  }
  