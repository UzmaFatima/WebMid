import React from 'react'
import Image from 'next/image'
import Logo from "../../public/logo.svg"

const Nav = () => {
  return (
    <div className='pt-10 flex flex-row items-center justify-between'>
 <div>
        <Image src={Logo}></Image>
    </div>
    
    <div className='flex flex-row gap-[50px] justify-between'>
<ul className='flex flex-row gap-[50px] justify-between'> 
    <li className='font-Inter font-medium font-size: 1rem leading-[24px]'>Home</li>
    <li className='font-Inter font-medium font-size: 1rem leading-[24px]'>Service</li>
    <li className='font-Inter font-medium font-size: 1rem leading-[24px]'>Feature</li>
    <li className='font-Inter font-medium font-size: 1rem leading-[24px]'>Product</li>
    <li className='font-Inter font-medium font-size: 1rem leading-[24px]'>Testimonials</li>
    <li className='font-Inter font-medium font-size: 1rem leading-[24px]'>FAQ</li>

        </ul> 
    </div>
    <div className='flex flex-row gap-[10px]'>
        <button class="bg-white  text-Primary font-Inter font-medium text-[14px]  rounded w-[77px] h-[40px]">
  Login
</button>
<button class="bg-green-500 text-white font-Inter font-medium text-[14px] w-[77px] h-[40px] rounded">
  Sign up
</button>

    </div>
    </div>
  )
}

export default Nav