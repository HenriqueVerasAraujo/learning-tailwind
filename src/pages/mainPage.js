import React from 'react'
import DarkModeCard from '../components/darkModeCard'
import useDarkMode from '../hooks/useDarkMode';

export default function MainPage() {
  const [colorTheme, setTheme ] = useDarkMode(); 
  const changeDarkMode = () => {
		setTheme(colorTheme);
	}
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-300 dark:bg-gray-900'>
      <DarkModeCard changeDarkMode={changeDarkMode}/>
    </div>
  )
}
