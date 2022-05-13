import React from 'react'

export default function SingleButton({ text }) {
  return (
    <div class='my-class'>
      <button className='md:px-[60px] px-10 font-Roboto font-bold md:py-5 py-1 bg-red text-white bg-red-400 border-2 bg-gradient-to-l from-red-600 to-red-900 bg border-red-500'>{text}</button>
    </div>
    
  )
}
