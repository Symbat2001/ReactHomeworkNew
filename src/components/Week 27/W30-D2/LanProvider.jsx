import React, { createContext, useState } from 'react';

export const LanguageContext = createContext()

export default function LanProvider({children}) {
    const [language, setLanguage] = useState('kk');
  return (
    <div>
      <LanguageContext.Provider value={{language, setLanguage}}>
        {children}
      </LanguageContext.Provider>
    </div>
  )
}
 