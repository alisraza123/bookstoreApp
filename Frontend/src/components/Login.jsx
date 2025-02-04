import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:4001/user/login', userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Successfully Login!');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000);

                }
            })
            .catch((err) => {
                if (err.response) {
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => {

                    }, 2000);
                }

            })
    }


    const closeModalAndRedirect = () => {
        const modal = document.getElementById('my_modal_3');
        modal.close();
    };

    return (
        <div>
            <Toaster />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white border">
                    <button onClick={closeModalAndRedirect} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className='rounded-xl'>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-3'>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'

                                className='md:w-80 w-[80vw] px-3 border rounded-md outline-none py-1 bg-red-900
                            dark:bg-slate-900 dark:text-white' {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                            {errors.email && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>{errors.email.type === 'required' ? 'This field is required' : 'Invalid email address'}</span>}
                        </div>
                        <div className='mt-4 space-y-3'>
                            <label>Password</label>
                            <input type="password" placeholder='Enter your password' className='md:w-80 w-[80vw] px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white        ' {...register("password", { required: true, minLength: 8 })} />
                            {errors.password && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>{errors.password.type === 'required' ? 'This field is required' : 'Password must be at least 8 characters long'}</span>}
                        </div>
                        <div className='flex justify-around mt-5'>
                            <button onClick={() => {
                                () => closeModalAndRedirect();

                            }} type="submit" className='bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered?
                                <Link to='/signup' className='underline text-blue-500 cursor-pointer font-extralight'> SignUp</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
