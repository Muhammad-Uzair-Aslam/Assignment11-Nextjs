import React from 'react'
import ClientsCard from '../clientsCard/clientsCard'
import Button from '../button/button'
import TextCard from '../textCard/textCard'

export default function OurBlogSection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:mx-28 w-4/6 md:w-fit mx-auto'>
    <div className='flex flex-col justify-center content-center'>
        <h1 className='mt-5  md:mt-10 lg:mt-20 text-xl  font-bold text-[#2370C8]'>OUR BLOG</h1>
        <p className='text-xl font-semibold  md:text-2xl'><span className="underline underline-offset-8 decoration-[#2370C8]">Latest</span> News & Blog</p>
        <p className='py-4'>Lorem ipsum, dolor sit amet consectetur elit Quasi doloremque impedit quod elis.</p>
        <input className='w-48 px-2 border-2 h-8 border-[#2370C8]' type='text' placeholder='Enter your Email' /><button className='w-14 relative -top-8 -right-48 h-8 bg-[#2370C8]'>&#8594;</button>
    </div>
    <div>
        <TextCard />
    </div>
    <div>
        <TextCard  />
    </div>
    </div>
  )
}
