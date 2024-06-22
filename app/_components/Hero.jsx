import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Hero() {
  return (
    <>
<section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
      Accurate Financial Tracking 
        <strong className="font-extrabold text-gray-700 sm:block"> For Optimal Profitability. </strong>
      </h1>

      <p className="mt-4 sm:text-md/relaxed">
      Easy and Accurate Steps for Financial Tracking and Analysis. Optimize Profitability with Expert Tips and Practical Tools. Start Managing Your Business Earnings Effectively Today!
      </p>

      <div className="mt-8 grid grid-cols-2 w-fit mx-auto  md:flex flex-wrap justify-center gap-4">
        <Link
          className="block  mb-3 rounded outline-none bg-gray-800 px-8 py-3 text-sm font-medium text-white shadow hover:bg-gray-700  active:bg-gray-500 sm:w-auto"
          href="/make-invoice"
        >
          Get Started
        </Link>
        <Link 
          className="block  mb-3 rounded  px-8 py-3 text-sm font-medium text-black border shadow-md hover:bg-gray-100  active:bg-gray-100 sm:w-auto"
          href="#"
        >
          Learn more
        </Link>

       
      </div>
    </div>
  </div>
</section>

</>
  )
}
