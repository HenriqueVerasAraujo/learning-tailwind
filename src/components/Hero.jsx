import React from 'react'
import SingleButton from './SingleButton'

export default function Hero() {
	return ( 
		<div className='font-Roboto w-full md:h-[650px] relative h-[500px] pt-[60px] bg-white'>
			<div className='w-full h-[590px] flex items-center justify-start flex flex-col px-[10%] md:pt-[150px] pt-[80px] absolute z-10'>
				<h1 className='text-white font-bold md:text-5xl text-3xl text-center pb-[50px] '>Get D&D Digital Content</h1>
				<h2 className='pb-[50px] md:w-[50%] text-white md:text-3xl text-1xl text-center'>Gain access to the digital Monstrous Compendium by signing up for a Wizards Account</h2>
				<SingleButton text='SIGH UP NOW' />
			</div>
			<div className='bg-black opacity-50 w-full absolute mt-[-60px] h-full z-0'></div>
			<img className='object-cover w-full h-full md:object-top' src="https://wallpaperaccess.com/full/1388689.jpg" alt="/" />
		</div>
	)
}
