import Link from 'next/link'
import React from 'react'
import { IoMdAdd } from "react-icons/io";
export default function Addinvoice() {
  return (
    <div >
        <Link href={'/make-invoice'} className='bg-gray-700 hover:bg-gray-600 py-1 px-3 rounded-sm  items-center flex text-white  w-fit'><IoMdAdd/> Invoice</Link>
    </div>
  )
}
