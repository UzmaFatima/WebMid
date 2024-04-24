import React from 'react'
import Image from 'next/image'
import Mem from "../../public/memicon.svg"
import Build from "../../public/buildicon.svg"
import Third from "../../public/thirdicon.svg"


const Community = () => {
    return (
        <div className='px-6 flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                <h1 className='font-Inter text-3xl font-semibold leading-[44px] text-align: center text-gray-600'>
                    Manage your entire community
                    <span>
                        <h1 className=' flex items-center font-Inter text-3xl font-semibold leading-[44px] text-align: center text-gray-600'>
                        in a single system
                        </h1>
                        </span>

                </h1>
                </div>
                <p className='font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-gray-500'>
                    Who is Nextcent suitable for?

                </p>
            </div>
            <div className='grid grid-cols-3 gap-8 justify-center items-center justify-evenly content-center'>
                <div className='flex flex-col gap-2'>
                    <div className='flex content-center'>
                        <Image src={Mem} className='w-[48px] h-[48px] '></Image>
                    </div>
                    <h1>
                        Membership Organisations
                    </h1>
                    <p className='font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-gray-500'>
                        Our membership management software provides full automation of membership renewals and payments
                    </p>

                </div>

                <div className='flex flex-col gap-2'>
                    <div
                    >
                        <Image src={Mem} className='w-[48px] h-[48px]'></Image>
                    </div>
                    <h1>
                        Membership Organisations
                    </h1>
                    <p className='font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-gray-500'>
                        Our membership management software provides full automation of membership renewals and payments
                    </p>

                </div>
                <div className='flex flex-col gap-2'>
                    <div
                    >
                        <Image src={Mem} className='w-[48px] h-[48px]'></Image>
                    </div>
                    <h1>
                        Membership Organisations
                    </h1>
                    <p className='font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-gray-500'>
                        Our membership management software provides full automation of membership renewals and payments
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Community