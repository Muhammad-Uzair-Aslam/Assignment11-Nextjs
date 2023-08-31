import React from 'react'
import Image from 'next/image'
export default function ImagesCard(props) {
  return (
    <div className='mx-auto group overflow-hidden'>
       <Image style={{height:props.height}} src={props.src} width={300} height={300} className='md:w-full md:h-full  transition-transform transform hover:scale-105 object-cover'/> <p style={{color:props.name,position:props.position,top:props.top,right:props.right,fontSize:props.size,backgroundColor:props.bg,paddingInline:"20px",opacity:"unset"}} className=' text-white   font-semibold  text-center invisible group-hover:visible '>{props.title}<br/><span style={{color:props.color}}>{props.desc}</span></p>
    </div>
  )
}
