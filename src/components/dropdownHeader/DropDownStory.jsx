import React from 'react'

export default function DropDownStory({ active }) {
  return (
    <div className= { active === false ? 'hidden' : ' pt-11 flex items-start justify-between px-[15%] w-full h-[300px] bg-black z-10 absolute top-[60px] left-0' }>
    <div className='flex flex-col'>
      <div className='mb-3'>
          <h2 className=' text-2xl  text-slate-200'>CURRENT STORIES</h2>
          <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
      </div>
      <ul className='text-zinc-500'>
          <li>The Wild Beyond the Witchlight</li>
          <li>Icewind Dale: Rime of the Frostmaiden</li>
      </ul>
    </div>
    <div className='flex flex-col'>
      <div className='mb-3'>
          <h2 className=' text-2xl  text-slate-200'> STORY ARCHIVE</h2>
          <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
      </div>
      <ul className='text-zinc-500'>
          <li>Descent Into Avernus</li>
          <li>Tomb of Annihilation</li>
          <li>Curse of Strahd</li>
          <li>Storm King's Thunder</li>
          <li>Rage of Demons</li>
          <li>Elemental Evil</li>
          <li>Tyranny of Dragons</li>
      </ul>
    </div>
    <div className='flex flex-col'>
      <div className='mb-3'>
          <h2 className=' text-2xl  text-slate-200'>LORE</h2>
          <div className='w-full bg-red-600 bg-gradient-to-l from-black via-red-600 to-black h-[3px]'></div>
      </div>
      <ul className='text-zinc-500'>
          <li>The Legend of Drizzt</li>
          <li>Heroes</li>
          <li>Monsters</li>
          <li>Locations</li>
      </ul>
    </div>
</div>
  )
}

