import React from 'react'
import { MenuIcon } from '@heroicons/react/outline';
import DndLogo from '../assets/dndLogo';

export default function Header() {
  return (
    <div className='w-full h-[60px] z-10 bg-[#dfddd6] px-3 fixed border-b-4 border-red-700'>
			<div className='md:w-full md:h-full flex md:items-center justify-center md:justify-between md:px-3 xl:px-[20%]'>
				<MenuIcon className='w-8 absolute top-3 left-10 md:hidden text-zinc-500'/>
				<div className='flex items-center pt-2'>
						<DndLogo />
				</div>
				<div className='hidden md:flex justify-between'>
					<h2 className='px-4 text-1xl hover:text-red-700 text-zinc-700 font-bold'>PRODUCTS</h2>
					<h2 className='px-4 text-1xl hover:text-red-700 text-zinc-700 font-bold'>GAMEPLAY</h2>
					<h2 className='px-4 text-1xl hover:text-red-700 text-zinc-700 font-bold'>STORY</h2>
					<h2 className='px-4 text-1xl hover:text-red-700 text-orange-200text-zinc-700 font-bold'>EVENTS</h2>
				</div>
				<div className='hidden md:flex'>
					<h2 className='text-1xl px-4 hover:text-red-700 text-zinc-700'>Store Locator</h2>
					<h2 className='text-1xl hover:text-red-700 text-zinc-700'>Account</h2>
				</div>
			</div>
    </div>
  )
}
