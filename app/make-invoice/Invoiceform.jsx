"use client";
import React, { useState } from "react";
import { productList } from "@/lib/Productjson";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Invoiceform() {
  const [error,setError]=useState("")
const [loading,setLoading]=useState(false)


const bDetails={
  name: "",
  phone: "",
  address: "",
  status: "paid",
}
  const [buyerdetails, setBuyerdetails] = useState(bDetails);

  const pDetails= {
    pName: "Apel",
    pQuantity: "1" ,
    pPrice: "",
    quantityType: "KG",
  }
  const [produtDetails, setProdutDetails] =useState([pDetails])

const handleInput=(e)=>{
    setBuyerdetails({...buyerdetails,[e.target.name]:e.target.value})  
   
}
const handlePorductinp=(e,i)=>{
  const newForm=[...produtDetails]
  newForm[i][e.target.name]=e.target.value;
 setProdutDetails(newForm)
}


  const handleSubmit=async(event)=>{
 event.preventDefault()
    setLoading(true)


   const res= await fetch("/api/invoice",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },body:JSON.stringify({"productdata":produtDetails,"buyer":buyerdetails})
    })
    if(res.ok){   
      const da=await res.json()
      if(res.status==200){
        toast.success("Successfully insert data ",{
          autoClose:1000
        })
        setLoading(false)
        setBuyerdetails(bDetails)
       
      }else if(res.status==405){
        toast.warning("Please check Info",{
          autoClose:1000
        })
        setLoading(false)
      }else{
        toast.error("Faild to insert data please try again leter",{
          autoClose:1000
        })
        setLoading(false)
      }
    
    }else{

      setLoading(false)
      toast.error("Faild to insert data please try again leter",{
        autoClose:1000
      })
    }
  }

const handleAddfield=(e)=>{
  e.preventDefault()
  if(produtDetails.length<8){
    setProdutDetails([...produtDetails,pDetails])
    setError("")
  }else{
    setError("Maxium 8 field add")
  }
    
}

const handleRemovefield=(e,i)=>{
  e.preventDefault()
  const formData=[...produtDetails]
    formData.splice(i,1)
    setProdutDetails(formData)
    setError("")
}
  return (
    <>
      <form  onSubmit={handleSubmit}  action="#" className="mt-8 border rounded-md md:w-[800px] w-[95%] mx-auto p-4 shadow-lg">
    <h1 className="text-2xl text-center font-bold  py-4">Make your awesome invoice </h1>
        <div className="invoicemain ">
        <div className="invoiceHeader text-center rounded-md w-full flex  my-1  px-2 py-3">

          <input
            type="text"
            required
            placeholder="Name of the buyer"
            name="name"
            value={buyerdetails.name}
            onChange={handleInput}
            className="w-full md:w-fit border py-2 m-1 px-2 rounded-md outline-none"
          />
          <input
            type="number"
            required
            placeholder="Phone number"
            name="phone"
            value={buyerdetails.phone}
            onChange={handleInput}
               className="w-full md:w-fit border py-2 m-1 px-2 rounded-md outline-none"
          />
          <input
            type="text"
            required
            placeholder="Address"
            name="address"
            value={buyerdetails.address}
            onChange={handleInput}
               className="w-full md:w-fit border py-2 m-1 px-2 rounded-md outline-none"
          />
         <select onChange={handleInput}  value={buyerdetails.status} name="status" className="w-full bg-white md:w-fit border py-2 m-1 px-2 rounded-md outline-none">
          <option value="paid">Paid</option>
          <option value="baki">Baki</option>
         </select>


        </div>


        {produtDetails.map((sindlePro,i)=>(
        <div key={i} className="productDetails my-2 rounded-md border md:flex grid-cols-2 grid gap-2 items-center justify-between px-2 py-4">

<div className="pBox border rounded-md  px-8 py-2 w-full">

<select onChange={(e)=>handlePorductinp(e,i)} value={sindlePro.pName} name="pName" className="outline-none bg-white w-full">
<option className=" bg-none outline-none" >Select product</option>
{productList.map((proname)=>(
  <option key={Math.random()} className=" outline-none" value={proname.name}>{proname.name}</option>

))}
 </select>
</div>

<div className="pBox border rounded-md px-8 py-2 w-full">
<select name="quantityType" className="outline-none w-full bg-white" onChange={(e)=>handlePorductinp(e,i)} value={sindlePro.quantityType}>
<option>Quantity Type</option>
    {productList.map((spq)=>(
       <option key={Math.random()} className="bg-whbite outline-none" value={spq.quentityType}>{spq.quentityType}</option>
    ))}

 </select>
</div>

<div className="pBox border rounded-md px-6 py-2 w-full">


  <select  value={sindlePro.pQuantity} onChange={(e)=>handlePorductinp(e,i)} name="pQuantity" className="outline-none w-full bg-white">
  <option >Quantity</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
</select>



</div>
<div className="pBox border rounded-md w-full">
<input type="number" className="w-full outline-none p-2" placeholder="Price" name="pPrice" value={sindlePro.pPrice} required  onChange={(e)=>handlePorductinp(e,i)}/>
</div>

<div className="pBox border rounded-md w-fit">

{i==0?(
  <button onClick={handleAddfield} type="submit"  className="w-full incDec p-2 bg-green-500 text-gray-100 rounded-sm">+</button>

):(
  <button onClick={(e)=>handleRemovefield(e,i)} type="submit" className="w-full p-2 bg-red-500 text-gray-100 rounded-sm">-</button>

)}
</div>
</div>
))}
   <div className="Calbtn w-full my-3 ">
     <button  className="w-fit px-8 py-2 bg-gray-700 text-white mx-auto block rounded-md">{loading ?  <Image src={'/loading-gif.gif'} width={20} height={20} className="py-1 " unoptimized alt="loading icon"/>:"Insert"}</button>
        </div>

        </div>
<div className="errorMessage">
  <b className="text-red-600 block text-center">{error && error}</b>
</div>

      </form>
    </>
  );
}
