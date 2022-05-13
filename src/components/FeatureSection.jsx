import React from 'react'
import Box1 from './featureComponentsBlocks/box1'
import Box2 from './featureComponentsBlocks/box2'
import boxValues from '../assets/boxValues'


export default function FeatureSection() {
  return (
    <div className='w-full h-screen md:h-screen font-Roboto relative z-0'>
        <div className='flex flex-col absolute  md:inset-x-0 z-10 mt-[80px] items-center justify-center'>
            <h1 className='text-5xl pl-[150px] md:pl-[0px] font-bold text-zinc-700 mb-[40px]'>Latest Features & Announcements</h1>
            <div className=' md:w-[1400px] px-5 md:h-[700px] flex flex-wrap md:pl-6'>
                <Box2 image={boxValues[0].image} title={boxValues[0].title} logo={boxValues[0].logo}/>
                <Box1 image={boxValues[1].image} title={boxValues[1].title} logo={boxValues[1].logo} />
                <Box1 image={boxValues[2].image} title={boxValues[2].title} logo={boxValues[2].logo} />
                <Box1 image={boxValues[3].image} title={boxValues[3].title} logo={boxValues[3].logo}/>
                <Box2 image={boxValues[4].image} title={boxValues[4].title} logo={boxValues[4].logo}/>
                <Box1 image={boxValues[5].image} title={boxValues[5].title} logo={boxValues[5].logo}/>
            </div>
        </div>
        <img className='object-cover md:object-right absolute md:h-full h-[2400px] z-0' src="https://images.ctfassets.net/swt2dsco9mfe/1tr6dUNuH2vNfUWXtUGnSh/991457a16f93c5df49cf32e1d343bde9/bg-media-gallery.jpg?q=70&w=1920&h=754&fit=crop&f=center&fm=avif" alt="/" />
    </div>
  )
}
