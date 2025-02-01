import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const closeModalAndRedirect = () => {
        const modal = document.getElementById('my_modal_3');
        modal.close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white border">
                    <button onClick={closeModalAndRedirect} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className='rounded-xl.
                    0import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const closeModalAndRedirect = () => {
        const modal = document.getElementById('my_modal_3');
        modal.close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white border">
                    <button onClick={closeModalAndRedirect} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className='rounded-xl'>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-3'>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email' className='md:w-80 w-[80vw] px-3 border rounded-md outline-none py-1' {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                            {errors.email && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>{errors.email.type === 'required' ? 'This field is required' : 'Invalid email address'}</span>}
                        </div>
                        <div className='mt-4 space-y-3'>
                            <label>Password</label>
                            <input type="password" placeholder='Enter your password' className='md:w-80 w-[80vw] px-3 border rounded-md outline-none py-1' {...register("password", { required: true, minLength: 8 })} />
                            {errors.password && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>{errors.password.type === 'required' ? 'This field is required' : 'Password must be at least 8 characters long'}</span>}
                        </div>
                        <div className='flex justify-around mt-5'>
                            <button className='bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200'>Login</button>
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

export default Login;'>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-3'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='md:w-80 w-[80vw] px-3 border rounded-md outline-none py-1' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-3'>
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter your password' className='md:w-80 w-[80vw] px-3 border rounded-md outline-none py-1' {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='text-[3.5vw] md:text-[1vw] text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-5'>
                            <button className='bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200'>Login</button>
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
