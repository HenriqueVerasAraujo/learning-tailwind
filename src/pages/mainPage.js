import React from 'react'
import FeatureSection from '../components/FeatureSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SignUp from '../components/SignUP'

export default function MainPage() {
  return (
    <div className='w-full bg-black'>
      <Header />
      <Hero />
      <FeatureSection />
      <SignUp />
    </div>
  )
}
