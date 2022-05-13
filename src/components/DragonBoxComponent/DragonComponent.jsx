import React from 'react'
import DragonBox from './DragonBox'
import boxValues from '../../assets/dragonTalkBox'

export default function DragonComponent() {
  return (
    <div className='w-full h-[600px] relative'>
        <div className=' w-full h-full px-[24%] flex items-center absolute justify-between z-10'>
            <DragonBox
            image={boxValues[0].image}
            title={boxValues[0].title}
            text={boxValues[0].text}
            buttonText={boxValues[0].buttonText}
            />
            <DragonBox
            image={boxValues[1].image}
            title={boxValues[1].title}
            text={boxValues[1].text}
            buttonText={boxValues[1].buttonText}
            />
        </div>
        <img className='object-cover w-full h-full absolute' src="https://images.ctfassets.net/swt2dsco9mfe/6X2X0ED4pOhkKpIeYL5m4n/4d676b014f775a80f6afb8bde9ec0898/ravenloft-faded-brown-backdrop-325464.jpg?w=1920&q=70&fm=avif" alt="/" />
    </div>
  )
}
