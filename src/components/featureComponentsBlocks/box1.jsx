import React from 'react'

export default function Box1({ image, title, logo }) {
  return (
    <div className='w-[320px] mx-[2px] mb-[4px] h-[350px] bg-white relative'>
        <div className=''>
            <h2>{logo}</h2>
        </div>
        <h1>{title}</h1>
        <img src={image} alt="/" />
    </div>
  )
}
