import React from 'react'
import Invoiceform from './Invoiceform'
export async function generateMetadata({ params }) {
    return {
      title: 'Genarate Invoice',
    }
  }

export default function page() {
  return (
    <>
    <Invoiceform/>
    </>
  )
}
