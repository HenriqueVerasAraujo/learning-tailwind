import { useState, useEffect, useContext } from 'react'
import myContext from '../context/myContext';

export default function useDarkMode() {
  const { setGlobalDarkMode } = useContext(myContext);

    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
      setGlobalDarkMode(colorTheme);
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    }, [theme])

    return [colorTheme, setTheme];
}
