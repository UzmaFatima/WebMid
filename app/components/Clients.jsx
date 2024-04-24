import React from 'react'
import Image from 'next/image'
import C1 from '../../public/c1.svg'
import C2 from "../../public/c1.svg"
import C3 from "../../public/c3.svg"
import C4 from "../../public/c4.svg"
import C5 from "../../public/c5.svg"
import C6 from "../../public/c6.svg"

const Clients = () => {
  return (
    <div className='px-6 flex flex-col items-center justify-center gap-4 pb-[80px]'>
        <div className='flex flex-col justify-center items-center'>
<h1 className='font-Inter text-3xl font-semibold leading-[44px] text-align: center text-gray-600'>
Our Clients

</h1>
<p className='font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-gray-500'>
We have been working with some Fortune 500+ clients  
</p>
        </div>
        <div className='pt-[20px]'>
            <ul className='flex flex-row justify-between  justify-between gap-20 items-center justify-center'>
<li>
    <Image src={C1}></Image>
</li>
<li>
    <Image src={C2}></Image>
</li>
<li>
    <Image src={C3}></Image>
</li>
<li>
    <Image src={C4}></Image>
</li>
<li>
    <Image src={C4}></Image>
</li>
<li>
    <Image src={C5}></Image>
</li>
<li>
    <Image src={C6}></Image>
</li>
            </ul>

        </div>
    </div>
  )
}

export default Clients