"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Registerform() {
  const userDataobj = {
    name: "",
    email: "",
    phone: "",
    address: "",
    currency: "",
    password: ""
  };
  const [userData, setUserdata] = useState(userDataobj);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const [emilMsg, setEmailmsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInpur = (e, name) => {
    setUserdata({ ...userData, [name]: e.target.value });
  };
  const registerValidate = async (val) => {
    if (
      val.name !== "" &&
      val.email !== "" &&
      val.address !== "" &&
      val.password !== "" &&
      val.phone !== ""
    ) {
      if (val.phone.length == 11 && val.password.length > 5) {
        if (agree) {
          try {
            setError("")
            //REST APi post data
            const res = await fetch("/api/register", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ userData }),
            });
            if (res.ok) {
              const jsConvert = await res.json();
              if (res.status == 200) {
                toast.success(jsConvert.message, { autoClose: 1000 });
                setLoading(false);
                setEmailmsg(jsConvert.emailStatus)
                setError("");
                 setUserdata(userDataobj);
              } else if (res.status == 201) {
                setError(jsConvert.message);
                setEmailmsg("")
                setLoading(false);
              } else if (res.status == 202) {
                setError(jsConvert.message);
                setEmailmsg("")
                setLoading(false);
              } else if (res.status == 500) {
                setError(jsConvert.message);
                setEmailmsg("")
                setLoading(false);
              }
            }
          } catch (error) {
            setError("Server error");
            setEmailmsg("")
          }
        } else {
          setError("Please check mark the box");
          setEmailmsg("")
          setLoading(false);
        }
      } else {
        setError("Password min 6 chart and phonne 11 disit");
        setLoading(false);
        setEmailmsg("")
      
      }
    } else {
      setError("Empty box");
      setLoading(false);
      setEmailmsg("")
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    registerValidate(userData);
  };

  return (
    <>
      <div className="main w-[90%] md:w-[400px] border md:border-gray-100 border-indigo-400 rounded-md mx-auto mt-10 py-4 mb-8 shadow-lg">
        <h1 className="text-xl text-center py-6 font-semibold">
          Register form
        </h1>
        <form onSubmit={handleSubmit} className="w-[90%] md:[80%] mx-auto">
          <input
            type="text"
            className="w-full border py-2 rounded-md px-2 my-1 outline-none"
            placeholder="Your business name"
            value={userData.name}
            name="name"
            onChange={(e) => handleInpur(e, "name")}
          />
          <input
            type="email"
            name="email"
            className="w-full border py-2 rounded-md px-2 my-1 outline-none"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => handleInpur(e, "email")}
          />
          <input
            type="number"
            name="number"
            className="w-full border py-2 rounded-md px-2 my-1 outline-none"
            placeholder="Phone number"
            value={userData.phone}
            onChange={(e) => handleInpur(e, "phone")}
          />
          <input
            type="text"
            name="address"
            className="w-full border py-2 rounded-md px-2 my-1 outline-none"
            placeholder="Your business address"
            value={userData.address}
            onChange={(e) => handleInpur(e, "address")}
          />

         <select  value={userData.currency}   onChange={(e) => handleInpur(e, "currency")}   className="w-full border py-2 rounded-md px-2 my-1 outline-none">
          <option >Currency</option>
          <option value="BDT">BDT</option>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="AUD">AUD</option>
          <option value="URO">URO</option>
         </select>

          <input
            type="password"
            name="password"
            className="w-full border py-2 rounded-md px-2 my-1 outline-none"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => handleInpur(e, "password")}
          />
          <p className="py-2 items-center">
            {" "}
            <input
              type="checkbox"
              onChange={() => setAgree(!agree)}
              value={agree}
            />{" "}
           I agree <Link className="text-blue-700" href={"#"}>terms</Link> and <Link className="text-blue-700" href={"#"}>conditions</Link>
          </p>
          <div className="msgsec">
            <p className="text-red-600 font-semibold text-center ">
              {error && error}
            </p>

              

          </div>
          <button
            type="submit"
            className="bg-gray-800 py-2 px-6 text-white rounded-md block cursor-pointer hover:bg-gray-700 my-4 mx-auto "
          >
            {loading ? (
              <Image
                src={"/loading-gif.gif"}
                width={20}
                height={20}
                alt="spine logo"
              />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="others">
          <p className="text-center gap-3">
            Already have an account
            <Link className="text-blue-600 px-1" href={"/login"}>
              Login
            </Link>
          </p>
       
        </div>
        {emilMsg && (
             <p className="text-gray-500 mt-5  bg-blue-200 p-2 w-[95%] rounded-sm mx-auto ">{emilMsg}</p>
         )}
      </div>
    </>
  );
}
