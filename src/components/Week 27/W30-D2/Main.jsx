import React, { useContext } from 'react';
import { LanguageContext } from './LanProvider';

const translations = {
    kk: 'Миссия тун ортасында басталды',
    ru: 'Миссия начинается в полночь',
    en: 'Mission starts at midnight'
}

export default function Main() {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = (e) => {
      setLanguage(e.target.value);
    };
  return (
    <div  className='bordered'>
      <h3>This is Main component</h3>
      <p>{translations[language]}</p>

      <select value={language} onChange={handleChange}>
        <option value="kk">Қазақша</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

