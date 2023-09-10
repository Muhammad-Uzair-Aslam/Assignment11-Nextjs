import React from 'react'
import Image from 'next/image'
export default function ClientsCard(props) {
  return (
    <div className='my-5 md:my-12  text-center border border-[#6AB0FF] shadow-blue-600 shadow-sm transition-transform transform hover:scale-105'>
      <Image className="mx-auto my-2"src="/imgs/Ellipse 50.png" width={100} height={100}/>
      <h1 className='font-semibold text-xl mt-3 md:mt-5 '>{props.title}</h1>
      <p>{props.text}</p>
      <p className='p-3'>There are many variations of passages of Lorem ipsum available, but the  majority have suffered alteration in some form, by <br/>injected humour,or randomised words which don't look <br/>even slightly believable,if you are going to use pass.</p>
    </div>
  )
}
