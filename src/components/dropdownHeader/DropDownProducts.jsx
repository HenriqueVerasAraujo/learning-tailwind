import React from 'react'

export default function DropDownProducts({ active } ) {
  return (
    <div className= { active === false ? 'hidden' : ' pt-11 flex items-start justify-between px-[15%] w-full h-[300px] bg-black z-10 absolute top-[60px] left-0' }>
    <div className='flex flex-col'>
        <div className='mb-3'>
            <h2 className=' text-2xl  text-slate-200'>TABLETOP GAMES</h2>
            <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
        </div>
    <ul className='text-zinc-500'>
        <li>Where to Start</li>
        <li>Tabletop RPGs</li>
        <li>Board & Card Games</li>
        <li>Miniatures</li>
        <li>Accessories</li>
        <li>All</li>
    </ul>
    </div>
    <div className='flex flex-col'>
        <div className='mb-3'>
            <h2 className=' text-2xl  text-slate-200'>DIGITAL GAMES</h2>
            <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
        </div>
        <ul className='text-zinc-500'>
            <li>Dark Alliance</li>
            <li>PC/Mac</li>
            <li>Console Games</li>
            <li>Mobile and Tablet</li>
            <li>Digital Tools</li>
            <li>All</li>
        </ul>
    </div>
    <div className='flex flex-col'>
        <div className='mb-3'>
            <h2 className=' text-2xl  text-slate-200'>FICTION</h2>
            <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
        </div>
        <ul className='text-zinc-500'>
            <li>Novels</li>
            <li>Comics/Graphic Novels</li>
            <li>All</li>
        </ul>
    </div>
    <div className='flex flex-col'>
        <div className='mb-3'>
            <h2 className=' text-2xl  text-slate-200'>SUPPORT</h2>
            <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
        </div>
        <ul className='text-zinc-500'>
            <li>Customer Support</li>
            <li>Store & Event Locator</li>
            <li>Amazon Storefront </li>
            <li>Stay at Home/Play at Home</li>
        </ul>
    </div>
</div>
  )
}







