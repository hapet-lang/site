import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function LocaleDropdown(): React.ReactElement {
  const {pathname} = useLocation();
  
  const handleLanguageChange = (locale: string) => {
    const newPath = locale === 'en' ? pathname : `/${locale}${pathname}`;
    window.location.href = newPath;
  };

  return (
    <select 
      onChange={(e) => handleLanguageChange(e.target.value)}
      defaultValue="en"
      style={{
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: 'inherit',
        cursor: 'pointer',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: '500'
      }}
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
} 