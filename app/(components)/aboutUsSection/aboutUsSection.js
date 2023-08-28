import React from 'react'
import Image from 'next/image'
export default function AboutUsSection() {
  return (
    <div className="container  my-5 md:my-14 lg:my-20 px-5 md:px-16 lg:px-16 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
      <div className="left ">
             <Image src={'/imgs/soft1.jpg'} width={300} height={300} className="w-full  p-5"/>
      </div>
      <div className="right ml-6 md:ml-12 md:pt-5 ">
            <h1 className="text-[#2370C8] text-[28px] font-semibold">About us</h1>
            <h2 className="text-xl mt-2 font-semibold md:text-4xl">We Design, build ,brands and digital projects</h2>
            <p className="md:text-lg my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt odit quas, nostrum magni facere neque quia, dolores qui consequuntur aspernatur quod sapiente quasi deleniti voluptates eius obcaecati rem iure.</p>
            <p className="md:text-lg mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt odit quas,</p>
            <button className="bg-[#2370C8] px-5 py-2 text-white  rounded-3xl">Read More</button>
      </div>
    </div>
  )
}
