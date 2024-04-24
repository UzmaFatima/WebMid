import React from 'react';
import Image from 'next/image';
import Frame1 from "../../public/frame1.svg"
import Dot from "../../public/dots.svg"

const Hero = () => {
  return (
    <div className='px-12 pt-[84px]'>
        <div className='grid grid-cols-2 gap-[104px]'> 
<div className='flex flex-col '>
    <h1 className='font-Inter font-size-[64px] font-semibold text-6xl leading-[76px] text-zinc-600'>
    Lessons and insights
    </h1>
    <span>
    <h1 className='font-Inter font-size-[64px] font-semibold text-6xl leading-[76px] text-green-400'>
    from 8 years
    </h1>
    </span>
        
  
    <p className='
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-gray-500
'>Where to grow your business as a photographer: site or social media?</p>
<button class="bg-green-500 text-white font-Inter font-medium text-[14px] w-[128px] h-[40px] rounded pt-[4px]">
  Register
</button>

</div>
<div>
    <div>
        <Image src={Frame1}></Image>
    </div>

</div>
        </div>
    </div>
  )
}

export default Hero