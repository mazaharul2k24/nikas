"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoSearchSharp } from "react-icons/io5";

export function InvoiceTable() {
  const [invoices, setInvoices] = useState([]);
  const [errorMsg, setErrormsg] = useState("");
  const [setext, setSettex] = useState("");
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const getAllinvoice = async () => {
      const res = await fetch("/api/getinvoice", {
        method: "GET",
      });
      if (res.ok) {
        const dataArr = await res.json();
        const ReverseArr = dataArr.data.reverse();
        setInvoices(ReverseArr);
      } else {
        console.log("Fech error");
      }
    };
    getAllinvoice();
  }, [setext]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    const res = await fetch("/api/searchdata/", {
      method: "POST",
      body: JSON.stringify({ setext }),
      headers: {
        "Content-Type": "application/json",
      },
    });
 
    if (res.ok) {
      const jsConverresult = await res.json();
      console.log(jsConverresult)
      if (res.status == 200) {
        setInvoices(jsConverresult.data.reverse());
        setErrormsg("");
        setloading(false)
      } else if (res.status == 202) {
        setErrormsg("Invalid number");
        setloading(false)
      } else {
        setErrormsg("Try again letter");
        setloading(false)
      }
    } else {
      setErrormsg("Not found");
      setloading(false)
    }
  };

  return (
    <>

<Suspense fallback="loading...">
      <form
        onSubmit={handleSubmit}
        className="md:flex items-center justify-between w-fit my-3 "
      >
      
        <div className="flex  items-center px-2 border rounded-md mx-2 ">
          <div>
            <IoSearchSharp />
          </div>
          <div className="md:w-[60%] w-full ">
            <input
              required
              type="number"
              value={setext}
              onChange={(e) => setSettex(e.target.value)}
              className="md:w-fit   w-fit mx-1 outline-none  py-1 px-2"
              placeholder="Enter buyer Number"
            />
          </div>
         
        </div>
        <button className="bg-[#0e7490] md:mt-0 mt-2 ml-3 mb-5 md:ml-0 md:mb-0 w-fit text-white py-1 px-6 rounded-md">
          {loading ? (
            <Image src={'/loading-gif.gif'} width={20} height={20} className="py-1 " unoptimized alt="loading icon"/>
          ):"search"}
        </button>
        <p className="text-red-500 mx-4 text-center font-semibold py-2">
        {errorMsg && errorMsg}
      </p>
      </form>
 

{invoices.length>0?(
      <Table className="w-[1000px] md:w-full">
      <TableHeader>
        <TableRow className="py-4">
          <TableHead className="w-[120px]">Invoice No</TableHead>
          <TableHead className="w-[70px]">Status</TableHead>
          <TableHead>Buyer name</TableHead>
          <TableHead > Buyer Phone</TableHead>
          <TableHead >Buyer Address</TableHead>

          <TableHead className="w-[120px]">Date</TableHead>
          <TableHead >Total</TableHead>
          <TableHead className="text-right">Manage</TableHead>
         
        </TableRow>
      </TableHeader>


    <TableBody>
        {invoices && invoices.map((invoice) => (
          <TableRow key={Math.random()}>
            <TableCell className="font-medium py-3 text-gray-900">#{invoice.buyerID}</TableCell>
            <TableCell className="font-medium py-3">{invoice.buyerStatus=="paid"?<p  className=" bg-teal-100 py-1 px-3  w-fit rounded-full text-gray-900">Paid</p>:<p className="bg-rose-100 py-1 px-3  w-fit rounded-full text-gray-900">Baki</p>}</TableCell>
            <TableCell className="font-medium ">
              {invoice.buyerName}
            </TableCell>
            <TableCell className="font-medium">
              {invoice.buyerPhone}
            </TableCell>
            <TableCell className="font-medium">
              {invoice.buyerAddress}
            </TableCell>
            <TableCell className="font-medium">
              {invoice.insertDate}
            </TableCell>
            <TableCell className="font-medium">
            {parseInt(invoice.buyerProduct.reduce((acc,curr)=>acc+Number(curr.pPrice*curr.pQuantity),0))} BDT
            </TableCell>
            <TableCell className="text-right">
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

):<p className="text-red-500 text-lg font-semibold text-center">No data found</p>}
         </Suspense>
    </>
  );
}
