import React from 'react'
import FeatureSection from '../components/FeatureSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SignUp from '../components/SignUP'
import DragonComponent from '../components/DragonBoxComponent/DragonComponent'

export default function MainPage() {
  return (
    <div className='w-full bg-black'>
      <Header />
      <Hero />
      <FeatureSection />
      <SignUp />
      <div className='w-full h-[80px] bg-stone-200'></div>
      <DragonComponent />
    </div>
  )
}
