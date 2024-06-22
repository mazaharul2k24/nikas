import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
  <>
  <header className="bg-white print:hidden">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link className="block" href="/">
        <h1 className='font-bold text-xl text-gray-800'>HISAB</h1>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-md">
          

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/sell"> Sell </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/buy"> Buy </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/today"> Today </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/invoices"> Invoices </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/status"> Status </Link>
            </li>
            <li>
              <Link className="text-gray-700 transition hover:text-gray-500/75" href="/profile"> Profile </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/login"
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link
              className="rounded-md bg-gray-100 px-5 hover:bg-gray-200 py-2.5 text-sm font-medium text-gray-600"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  </>
  )
}
