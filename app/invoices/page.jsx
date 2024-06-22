"use client"
import React, { Suspense, useState } from 'react'
import {InvoiceTable} from "./InvoiceTable"
import { SkletonCom } from '../_components/Skleton'
import Addinvoice from './Addinvoice'

export default function page() {




  return (
    <>

     <Suspense fallback={<SkletonCom/>}>
   <div className='w-[95%] md:w-[80%] mx-auto  mt-6'>
    <div className='flex items-center justify-between w-[30%]  px-2 py-1  mb-3'>
    <Addinvoice/>
   
    </div>
  <div className='border shadow-xl shadow-gray-200 rounded-md mx-2 my-2'>
  <h1 className='font-bold text-2xl py-3 text-center'>Invoice list</h1>
   <InvoiceTable />
   </div>
  </div>

   </Suspense>

    </>
   
  )
}
