import React from 'react'
import SingleButton from './SingleButton'

export default function SignUP() {
  return (
    <div className='bg-red-600 w-full h-[350px] relative mb-10 z-0'>
        <div className='w-fit h-fit flex font-Roboto absolute z-10 md:px-[300px]'>
            <img  className='md:pr-10' src="https://images.ctfassets.net/swt2dsco9mfe/6Kea8mPfG9Ba1RLniuJGlo/b6c63cfc2dfb1b4106e7d45f7754bb8a/D7h01oScW0cn-productth-lorecard.png?w=406&h=312&q=70&fit=thumb&fm=avif" alt="/" />
            <div className='flex flex-col justify-center items-start md:pl-10'>
                <h1 className='text-red-800 font-extrabold text-4xl pb-3'>Get Digital D&D Content</h1>
                <h1 className='text-zinc-800 text-2xl pb-1'>Sign up now for a Wizards Account, and gain access to the digital Monstrous Compendium!</h1>
                <h1 className='text-zinc-800 font-2xl pb-5'> (Already have a Wizards Account? Sign in now.)</h1>
                <SingleButton text='SIGN UP NOW'/>

            </div>
        </div>
        <img  className='object-cover w-full h-full absolute z-0' src="https://images.ctfassets.net/swt2dsco9mfe/VThip0PtJa6THbBMULIQw/f21209649170517a6053e9a128281cd7/oDh01ocW0cn-product-ctablock.jpg?q=70&w=1920&fm=webp" alt="/" />
    </div>
  )
}
