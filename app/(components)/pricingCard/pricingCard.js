import React from 'react'
import Image from 'next/image'
import Button from '../button/button'
export default function PricingCard(props) {
  return (
    <div className=' mx-auto box w-5/6 md:w-full text-center  border shadow-gray-300 shadow-md hover:bg-[#2370C8] hover:text-white group'>
        <h1 className='font-semibold text-xl mt-5 md:mt-10 mb-3'>{props.title}</h1>
       <Image className="mx-auto my-2"src="/imgs/Group 90.png" width={100} height={100}/>
       <p className='text-2xl ' style={{fontWeight:props.weight}}>{props.number}<span className='font-semibold text-base text-[#2370C8] group-hover:text-white'>/Month </span></p>
       <ul className='mt-2 space-y-1'>
        <li>Graphic Design</li>
        <li>Web Design</li>
        <li>UI/UX</li>
        <li>HTML/CSS</li>
        <li>SEO Marketing</li>
        <li>Business Analysis</li>
       </ul>
       <div className='my-7 '>
       <button className=" px-5 py-2  rounded-3xl bg-[#2370C8] text-white group-hover:bg-white group-hover:text-[#2370C8]">Start Now</button>
       </div>
        </div>
  )
}
