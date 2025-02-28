import React from 'react'
import { Link } from 'react-router-dom'

const AuthBtn = () => {
  return (
    <>
    <div className='flex gap-[34px]'>
        <button className='w-[130px] h-[55px] bg-[#E6D2FF] text-[#8D34FF] cursor-pointer rounded'>
          <Link to="/auth/sign-in">
          Login
          </Link>
          </button>

        <button className='w-[130px] h-[55px] bg-[#8D34FF] text-[#F5F5F5] cursor-pointer rounded'>
          <Link to="/auth/sign-up">
          Sign Up
        </Link>
        
        </button>
    </div>
    </>
  )
}

export default AuthBtn