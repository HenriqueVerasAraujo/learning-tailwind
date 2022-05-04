import React, { useContext }from 'react'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/solid'
import myContext from '../context/myContext'

export default function DarkModeCard({ changeDarkMode }) {
	const { globalDarkMode } = useContext(myContext);
  return (
    <div className='flex flex-col w-[500px] px-6 py-4 rounded-md dark:bg-slate-800 bg-slate-100 shadow-xl'>
			<div className='flex justify-between items-center mb-[10px] border-b-2'>
			{globalDarkMode === 'dark' ? (
					<button>
						<h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-200 '>Dark Mode - OFF</h1>
					</button>
				) : (
					<button>
						 <h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-200 '>Dark Mode - ON</h1>
					</button>
				)}
				{globalDarkMode === 'dark' ? (
					<button>
						<SunIcon  onClick={ changeDarkMode } className='w-10 text-zinc-900'/>
					</button>
				) : (
					<button>
						<MoonIcon  onClick={ changeDarkMode } className='w-10 text-zinc-200'/>
					</button>
				)}
			</div>
				<h3 className='text-zinc-900 dark:text-zinc-100'>Um pequeno projeto para praticar a implementação de Dark Mode em paginas com react e tailwind</h3>
				<h3 className='text-zinc-900 dark:text-zinc-100 my-3'>Clique no icone para trocar o modo de exibição.</h3>
    </div>
  )
}
