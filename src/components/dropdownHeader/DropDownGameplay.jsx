import React from 'react'

export default function DropDownGameplay({ active } ) {
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
</div>
  )
}







