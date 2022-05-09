import React, { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline';
import DndLogo from '../assets/dndLogo';
import DropDownProducts from './dropdownHeader/DropDownProducts';
import DropDownGameplay from './dropdownHeader/DropDownGameplay';
import DropDownStory from './dropdownHeader/DropDownStory';
import DropDownEvents from './dropdownHeader/DropDownEvents';

export default function Header() {
	const [activeProduct1 ,setActiveProduct1] = useState(false);
	const [activeProduct2 ,setActiveProduct2] = useState(false);
	const [activeProduct3 ,setActiveProduct3] = useState(false);
	const [activeProduct4 ,setActiveProduct4] = useState(false);
	
	const onClickFunction1 = () => {
		setActiveProduct1(!activeProduct1);
		setActiveProduct2(false);
		setActiveProduct3(false);
		setActiveProduct4(false);
	}

	const onClickFunction2 = () => {
		setActiveProduct2(!activeProduct2);
		setActiveProduct1(false);
		setActiveProduct3(false);
		setActiveProduct4(false);
	}

	const onClickFunction3 = () => {
		setActiveProduct3(!activeProduct3);
		setActiveProduct1(false);
		setActiveProduct2(false);
		setActiveProduct4(false);
	}

	const onClickFunction4 = () => {
		setActiveProduct4(!activeProduct4);
		setActiveProduct1(false);
		setActiveProduct2(false);
		setActiveProduct3(false);
	}

  return (
    <div className='w-full h-[60px] z-10 bg-[#dfddd6] fixed border-b-4 border-red-700 shadow-xl'>
			<div className='md:w-full md:h-full flex md:items-center justify-center md:justify-between md:px-3 xl:px-[20%]'>
				<MenuIcon className='w-8 absolute top-3 left-10 md:hidden text-zinc-500'/>
				<div className='flex items-center pt-2'>
						<DndLogo />
				</div>
				<div className='hidden md:flex justify-between'>
					<button onClick={onClickFunction1}>
						<h2 className='px-4 text-1xl hover:cursor-pointer hover:text-red-700 text-zinc-700 font-bold'>PRODUCTS</h2>
					</button>
					<button onClick={onClickFunction2}>
						<h2 onClick={onClickFunction2} className='px-4 text-1xl hover:cursor-pointer hover:text-red-700 text-zinc-700 font-bold'>GAMEPLAY</h2>
					</button >
					<button onClick={onClickFunction3}>
						<h2 className='px-4 text-1xl hover:cursor-pointer hover:text-red-700 text-zinc-700 font-bold'>STORY</h2>
					</button>
					<button nClick={onClickFunction4}>
						<h2 o className='px-4 text-1xl hover:cursor-pointer hover:text-red-700 text-zinc-700 font-bold'>EVENTS</h2>
					</button>
				</div>
				<div className='hidden md:flex'>
					<h2 className='text-1xl px-4 hover:text-red-700 text-zinc-700'>Store Locator</h2>
					<h2 className='text-1xl hover:text-red-700 text-zinc-700'>Account</h2>
				</div>
			</div>
					<DropDownProducts active={activeProduct1}/>
					<DropDownGameplay active={activeProduct2} />
					<DropDownStory active={activeProduct3} />
					<DropDownEvents active={activeProduct4} />
    </div>
  )
}
