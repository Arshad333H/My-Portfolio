import Image from 'next/image'
import React from 'react'
import Logo from "/public/logo.png";

const Footer = () => {
  return (
    <div className='max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d] '>
        <a href="">
                  <Image
                    src={Logo}
                    width={120}
                    height={80}
                    alt="logo"
                    className="max-h-[80px] h-full object-contain object-center  "
                  />
                </a>
                <span className='text-[0.9rem] font-semibold text-gray-500 '>Going to Internet - Copyright 2025</span>
    </div>
  )
}

export default Footer