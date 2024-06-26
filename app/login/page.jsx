"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Loginform() {
    const userDataobj={
        email:"",
        password:""
    }
    const [userData,setUserdata]=useState(userDataobj)
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const handleInpur=(e,name)=>{
      setUserdata({...userData,[name]:e.target.value})
    }


    const registerValidate=async(val)=>{
        if(val.name!=="" && val.email!=="" && val.address!=="" && val.password!=="" && val.phone!==""){
            if(val.phone.length==11 && val.password.length>6){
                //REST APi post data 
                setError("")
                fetch("/api/register",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },body:JSON.stringify({userData})
                }).then((json)=>{
                    return json.json()
                }).then((res)=>{
                    // if(res.status==200){
                    //     console.log("succ")
                    // }
                   setLoading(false)
                    setError("")
                }).catch((Err)=>{
                    console.log(Err)
                    setLoading(false)
                    setError("")
                })
                
            }else{
                setError("Password min 6 chart and phonne 11 disit")
                setLoading(false)
            }
             
        }else{
            setError("Empty box")
            setLoading(false)
            
        }
    }




    const handleSubmit=async(event)=>{
        event.preventDefault()
      console.log(userData)
    }


  return (
    <>

   <div>
   <div className="main w-[90%] md:w-[400px] border md:border-gray-200 border-indigo-400 rounded-md mx-auto mt-10 py-6 mb-8 shadow-xl ">
        <h1 className='text-xl text-center py-3 font-semibold'>Login</h1>
        <form onSubmit={handleSubmit} className='w-[90%] md:[80%] mx-auto'>
            <input type="email" className='w-full border py-2 rounded-md px-2 my-1 outline-none' placeholder='Email' value={userData.email} onChange={(e)=>handleInpur(e,"email")} />
            <input type="password" className='w-full border py-2 rounded-md px-2 my-1 outline-none' placeholder='Password' value={userData.password} onChange={(e)=>handleInpur(e,"password")} />
                <button type='submit' className='bg-gray-800 py-2 px-6 text-white rounded-md block cursor-pointer hover:bg-gray-700 my-4 mx-auto '>{loading?<Image src={'/loading-gif.gif'} width={20} height={20} alt='spine logo'/>:"Login"}</button>
                <div className="msgsec">
            <p className='text-red-600 font-semibold text-center '>{error && error}</p>
        </div>
        </form>
        <div className="others">
            <p className='text-center gap-3'>Don't have an account <Link className='text-blue-600' href={'/register'}>Register</Link></p>
        </div>
       
    </div>
   </div>
    
    
    </>
  )
}
