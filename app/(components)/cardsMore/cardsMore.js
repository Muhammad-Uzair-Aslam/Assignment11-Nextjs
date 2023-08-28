import React from 'react'
import Image from 'next/image'
export default function CardsMore(props) {
  return (
    <div className='w-full md:w-1/3 text-center p-5 py-10'>
       <Image src={props.src} width={50} height={50} className='mx-auto rounded-full h-28 w-28'/>
       <h1 className='text-xl md:text-2xl font-semibold'>{props.heading}</h1>
       <p className='text-sm sm:text-base md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing  tempora aliquid ad doloremque sapiente saepe delectus modi.</p>
    </div>
  )
}
