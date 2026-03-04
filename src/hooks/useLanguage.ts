import { useState, useEffect } from 'react';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

export default function useLanguage() {
  const [lang, setLang] = useState('en');
  const [t, setT] = useState(en);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLang(savedLang);
  }, []);

  function changeLang(newLang: string) {
    setLang(newLang);
    localStorage.setItem('lang', newLang);

    if (newLang === 'en') setT(en);
    if (newLang === 'zh') setT(zh);
  }

  return { lang, t, changeLang };
}