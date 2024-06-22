import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoAddOutline, IoHomeOutline } from 'react-icons/io5'
import { AiOutlineProduct } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";

export default function Sidebar() {
  return (
    <>
       <div className="main w-[220px] py-3">
        <div className="hlogo">
          <h1>HISAb</h1>
        </div>
        <div className="menu mt-4 py-4">
          <ul>

            
         <Link href={'/'}>
         <li className='flex gap-2 cursor-pointer items-center my-1 bg-gray-700 w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <IoHomeOutline/>
              </div>
              <div className="text">
               Dashboard
              </div>
            </li>
         </Link>
         <Link href={'/invoices'}>
         <li className='flex gap-2 cursor-pointer items-center my-1 w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <TbFileInvoice/>
              </div>
              <div className="text">
               Invoices
              </div>
            </li>
         </Link>

         <Link href={'/'}>
         <li className='flex gap-2 cursor-pointer items-center my-1 w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <LuUsers />
              </div>
              <div className="text">
               Users
              </div>
            </li>
         </Link>
         <Link href={'profile/abc'}>
         <li className='flex gap-2 cursor-pointer items-center my-1  w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <IoAddOutline />
              </div>
              <div className="text">
               Add product
              </div>
            </li>
         </Link>

        
         <li className='flex gap-2 cursor-pointer items-center my-1  w-[90%] mx-auto py-2 rounded-md px-4 hover:text-white hover:bg-gray-700 focus:text-white'>
              <div className="incon">
              <AiOutlineProduct />
              </div>
              <div className="text">
              <a href={'/invoices'}>
               Products
               </a>
              </div>
            </li>
   

           


          </ul>
        </div>
       </div>
    </>
  )
}
