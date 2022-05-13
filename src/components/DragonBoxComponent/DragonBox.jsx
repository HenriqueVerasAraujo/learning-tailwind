import SingleButton from "../SingleButton";

import React from 'react'

export default function DragonBox({ image, title, text, buttonText }) {
  return (
      <div className=" w-[440px] h-[500px] bg-white my-class2">
        <img className=" w-full h-[40%] object-cover " src={image} alt="/" />
        <div className=" w-full flex flex-col justify-center items-center mt-8 px-10">
          <h1 className="font-bold text-3xl text-zinc-700">{title}</h1>
          <h2 className="text-center text-lg text-zinc-600 my-6">{text}</h2>
          <SingleButton text={buttonText} />
        </div>
      </div>
  )
}
