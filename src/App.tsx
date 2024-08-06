import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Footer from './Components/Footer';
import FeedBack from './Components/FeedBack';
import Home from './Components/Home/Home';
import Header from './Components/header';
import data from './Data/data.json';
import AllCategories from './Components/AllCategories/AllCategories';
import { CssBaseline } from '@mui/material';
import SingleCategory from './Components/SingleCategory/SingleCategory';
import NotFound from './Components/NotFound';
import { useLanguage } from './Contexts/LanguageContext';

const App: React.FC = () => {
  const { language } = useLanguage();
  const [categoriesEnglish, setCategoriesEnglish] = useState<string[]>([]);
  const [categoriesArabic, setCategoriesArabic] = useState<string[]>([]);
  
  useEffect(() => {
    const pagesEnglish = Object.keys(data['en'][0]);
    const pagesArabic = Object.keys(data['ar'][0]);
    
    setCategoriesEnglish(['home',...pagesEnglish]);
    setCategoriesArabic(['الصفحة الرئيسية',...pagesArabic]);
  }, [language]);

  return (
    <>
      <CssBaseline />
      <Router>
        <Header categoriesEnglish={categoriesEnglish} categoriesArabic={categoriesArabic} />
        <Routes>
          <Route path="/" element={<Navigate replace to={`/${localStorage.getItem('language') || 'en'}/home`} />} />
          <Route path=":lang/home" element={<Home categories={language === 'en' ? categoriesEnglish : categoriesArabic} />} />
          {
            (language === 'en' ? categoriesEnglish : categoriesArabic).map((category, index) => (
              <>
                <Route path={`:lang/${categoriesEnglish[index].replace(' ', '')}`} element={<AllCategories category={category} />} />
                <Route path={`:lang/${categoriesEnglish[index].replace(' ', '') + '/:id'}`} element={<SingleCategory category={category} />} />
                <Route path={`:lang/${categoriesEnglish[index]}/*`} element={<NotFound />} />                
              </>
            ))
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <FeedBack /> */}
        <Footer categoriesEnglish={categoriesEnglish} categoriesArabic={categoriesArabic} />
      </Router>
    </>
  )
}

export default App
