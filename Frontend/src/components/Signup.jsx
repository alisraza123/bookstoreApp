import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Importing the cross icon from react-icons
import Login from './Login'; // Ensure to import the Login component
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const [showLogin, setShowLogin] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const userInfo = {
      fullname: data.email,
      email: data.email,
      password: data.password
    }
    await axios.post('http://localhost:4001/user/signup', userInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          toast.success('Successfully Signup!');
          setTimeout(() => {
            navigate(from, { replace: true })

          }, 1000);

        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }

      })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  dark:bg-slate-900 dark:text-white border relative ">

      <Toaster />

      <Link to="/" className="absolute top-4 right-4">
        <FaTimes className="text-gray-700 dark:text-white cursor-pointer" size={24} />
      </Link>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 md:p-8 shadow-md w-full md:w-96 dark:bg-slate-900 dark:text-white border rounded-xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-slate-900 dark:text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your fullname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"{...register("fullname", { required: true })}

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
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>This field is required</span>}
        </div>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already registered?{' '}
          <Link to="/">
            <span onClick={() => setShowLogin(true)} className="text-pink-500 underline cursor-pointer">
              Login
            </span>
          </Link>
          {showLogin && <Login />}

        </p>
      </form>
    </div>
  );
};

export default Signup;
