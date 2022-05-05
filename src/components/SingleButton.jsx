import React from 'react'

export default function SingleButton({ text }) {
  return (
    <button className='md:px-9 px-6 font-Roboto md:py-5 py-3 bg-red md:text-2xl text-1xl text-white bg-red-400 border-2 bg-gradient-to-l from-red-600 to-red-900 bg border-red-500 rounded-md'>{text}</button>
  )
}
