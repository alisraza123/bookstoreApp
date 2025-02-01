import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; 
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
  return (
    <div>
        <Navbar/>
        
 <div className=" p-4 md:p-0 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white border relative">
    <Link to="/" className="absolute top-4 right-4">
      <FaTimes className="text-gray-700 dark:text-white cursor-pointer" size={24} />
    </Link>
    <div className='pl-4 md:pl-0 flex items-start w-96'>
    <h1 className="text-2xl md:text-2xl font-semibold mb-6 ">Contact Us</h1>

    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 md:p-8 rounded shadow-md w-full md:w-96 dark:bg-slate-900 dark:text-white border rounded-xl">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-slate-900 dark:text-white" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"{...register("name", { required: true })}
          
        />
         <br />
         {errors.name && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>This field is required</span>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-slate-900 dark:text-white" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"{...register("email", { required: true })}
        />
         <br />
         {errors.email && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>This field is required</span>}
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-slate-900 dark:text-white" htmlFor="email">
          Messege
        </label>
      <div className="mb-6">
        <input
          type="text"
          id="messege"
          placeholder="Enter your messege"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("password", { required: true })}
        />
         <br />
         {errors.password && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>This field is required</span>}
      </div>
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >Submit</button>
    </form>
  </div>
  <Footer/>
    </div>
   
  );
}

export default Contact;