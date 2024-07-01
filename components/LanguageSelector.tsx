import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Assuming 'en' is the default language

  const handleChangeLanguage = (lang: string) => {
    changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  const getButtonClass = (lang: string) => {
    return `py-2 px-4 rounded-md border border-color-white ${selectedLanguage === lang ? 'bg-white text-black shadow-md' : 'bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out'}`;
  };

  return (
    <div className="language-selector flex space-x-2">
      <button onClick={() => handleChangeLanguage('en')} className={getButtonClass('en')}>
        English
      </button>
      <button onClick={() => handleChangeLanguage('uz')} className={getButtonClass('uz')}>
        Uzbek
      </button>
      <button onClick={() => handleChangeLanguage('ru')} className={getButtonClass('ru')}>
        Russian
      </button>
    </div>
  );
};

export default LanguageSelector;
