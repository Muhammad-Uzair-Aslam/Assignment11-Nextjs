import React from 'react'

export default function TextCard(props) {
  return (
    <div  className=' md:my-12 px-5 group border border-[#6AB0FF] shadow-blue-600 shadow-sm md:py-7 hover:bg-[#2370C8] hover:text-white'>
      <h1 className='py-3 md:py-5 font-semibold text-lg'>Maecenas laoree efficiture sagitis aliquam eleifend nisl.</h1>
      <p  className='font-semibold text-[#2370C8] group-hover:text-white'>Posted 7 March 2020</p>
      <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing  tempora aliquid ad doloremque sapiente saepe delectus modi.Lorem ipsum dolor sit amet consectetur adipisicing  tempora aliquid ad doloremque sapiente saepe delectus modi.</p>
      <p  className='font-semibold text-[#2370C8] group-hover:text-white'>Read More &#8594;</p>
    </div>
  )
}
