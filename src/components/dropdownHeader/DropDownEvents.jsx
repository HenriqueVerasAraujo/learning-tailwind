import React from 'react'

export default function DropDownEvents({ active }) {
  return (
    <div className= { active === false ? 'hidden' : ' pt-11 flex items-start justify-between px-[15%] w-full h-[300px] bg-black z-10 absolute top-[60px] left-0' }>
    <div className='flex flex-col'>
      <div className='mb-3'>
          <h2 className=' text-2xl  text-slate-200'>EVENTS & CONVENTIONS</h2>
          <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
      </div>
      <ul className='text-zinc-500'>
          <li>Virtual Play Weekends</li>
          <li>D&D Direct</li>
          <li>Extra Life</li>
      </ul>
    </div>
    <div className='flex flex-col'>
      <div className='mb-3'>
          <h2 className=' text-2xl  text-slate-200'>ADVENTURERS LEAGUE</h2>
          <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
      </div>
      <ul className='text-zinc-500'>
          <li>Overview</li>
          <li>Player Info</li>
          <li>DM Info</li>
          <li>Mist Hunters</li>
      </ul>
    </div>
    <div className='flex flex-col'>
      <div className='mb-3'>
          <h2 className=' text-2xl  text-slate-200'>COMMUNITY</h2>
          <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
      </div>
      <ul className='text-zinc-500'>
          <li>Discord</li>
          <li>Facebook</li>
          <li>Twitch</li>
          <li>YouTube</li>
          <li>Fan Site Kit</li>
      </ul>
    </div>
</div>
  )
}
