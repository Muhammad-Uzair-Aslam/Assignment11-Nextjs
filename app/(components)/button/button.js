import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button className=" px-5 py-2  rounded-3xl" style={{backgroundColor:props.bg,color:props.color}}>{props.text}</button>
    </div>
  )
}
