"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useEffect,useState } from 'react'
import Link from 'next/link'
export default function Accpage() {
  const [msg,setMsg]=useState("")
  const [error,setError]=useState("")
  const {id}=useParams()

  useEffect(()=>{
    const ActiveAcc=async()=>{
      const res=await fetch("/api/register/active",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({id})
      })
      if(res.ok){
        const convertJson=await res.json()
        if(res.status==200){
          setMsg("Successfully verified your email please login now")
        }else if(res.status==202){
          setError("Faild to verified your email please try again")
        }else if(res.status==203){
          setMsg("Already verified your email please login")
        }
       
      }else{
console.log("faild to convert json")
      }
    }

    ActiveAcc()
  },[id])

  return (
    <div className='w-[40%] mx-auto border shadow-md rounded-md py-6 px-8 mt-10'>
      <h1>Your acctivation key is : {id}</h1>
      {error && (
        <p>{error} <Link className=' text-red-500 px-1 rounded-md' href={'/register'}>Register</Link></p>
      )}
      {msg && (
        <p>{msg} <Link  className=' text-blue-500 px-1 rounded-md ' href={'/login'}>Login</Link></p>
      )}

    </div>
  )
}
