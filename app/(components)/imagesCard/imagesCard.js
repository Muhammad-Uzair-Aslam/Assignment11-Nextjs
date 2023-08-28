import React from 'react'
import Image from 'next/image'
export default function ImagesCard(props) {
  return (
    <div className='mx-auto group'>
       <Image style={{height:props.height}} src={props.src} width={300} height={300} className='md:w-full md:h-full'/> <p className=' text-white text-2xl font-semibold relative -top-10 text-center invisible group-hover:visible '>{props.title}</p>
    </div>
  )
}
