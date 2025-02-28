import React from 'react'

const AuthBtn = () => {
  return (
    <>
    <div className='flex gap-[34px]'>
        <button className='w-[130px] h-[55px] bg-[#E6D2FF] text-[#8D34FF] cursor-pointer rounded'>Login</button>
        <button className='w-[130px] h-[55px] bg-[#8D34FF] text-[#F5F5F5] cursor-pointer rounded'>Sign Up</button>
    </div>
    </>
  )
}

export default AuthBtn