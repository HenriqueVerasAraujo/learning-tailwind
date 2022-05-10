import React from 'react'

export default function Box1({ image, title, logo }) {
  return (
    <div className='w-[320px] mx-[4px] pointemb-[4px] mb-[8px] h-[350px] bg-white relative hover:cursor-pointer'>
        <div className='z-10 absolute top-0 right-0'>
            <h2 className='bg-red-800 px-2 pt-[3px] text-white font-Roboto font-bold flex items-center justify-center'>{logo}</h2>
        </div>
        <h1 className='absolute bottom-3 left-3 font-Roboto text-2xl font-bold px-4 pb-3 z-10 text-white'>{title}</h1>
        <div className='w-[320px]  opacity-80 h-[200px] absolute  bottom-0 bg-gradient-to-b from-transparent to-black' ></div>
        <img className='h-full object-cover z-0' src={image} alt="/" />
    </div>
  )
}
