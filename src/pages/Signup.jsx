import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate() 

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await signUp(email, password)
            navigate('/')
        } catch(error){
            console.log(error)
        }

    }
  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/a38323b2-1225-4672-8ebc-1357b7ac35d5/ET-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit= {handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                        <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <p>Need help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix? </span>
                        <Link to = '/login'>Sign In</Link>
                        </p>
                    </form>
                </div>

            </div>

        </div>
    </div>
    </>
  );
};

export default Signup