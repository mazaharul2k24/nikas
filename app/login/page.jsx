import Link from 'next/link'

export default function page() {


  return (
    <>

   <div>
   <div className="main w-[90%] md:w-[400px] border md:border-gray-200 border-indigo-400 rounded-md mx-auto mt-10 py-6 mb-8 shadow-xl ">
        <h1 className='text-xl text-center py-3 font-semibold'>Login</h1>
        <form className='w-[90%] md:[80%] mx-auto'>
            <input type="email" className='w-full border py-2 rounded-md px-2 my-1 outline-none' placeholder='Email' />
            <input type="password" className='w-full border py-2 rounded-md px-2 my-1 outline-none' placeholder='Password'  />
                <button type='submit' className='bg-gray-800 py-2 px-6 text-white rounded-md block cursor-pointer hover:bg-gray-700 my-4 mx-auto '>Login</button>
                <div className="msgsec">
          
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
