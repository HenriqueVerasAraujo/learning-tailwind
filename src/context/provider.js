import myContext from "./myContext";
import React, { useState } from 'react';

export default function Provider({ children }) {
 const [globalDarkMode, setGlobalDarkMode] = useState('dark');

const contextValue = {
  globalDarkMode,
  setGlobalDarkMode
};

  return (
    <myContext.Provider value = { contextValue }>
      { children }
    </myContext.Provider> 
  )
}