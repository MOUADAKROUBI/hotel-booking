import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import FeedBack from './Components/FeedBack';
import Home from './Components/Home/Home';
import Header from './Components/header';
import data from './Data/data.json';
import AllCategories from './Components/AllCategories/AllCategories';
import { CssBaseline } from '@mui/material';
import SingleCategory from './Components/SingleCategory/SingleCategory';

function App() {

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoryNames = Object.keys(data.data[0]);
    setCategories(categoryNames);
  }, []);

  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          {
            categories.map((category) => (
              <Route key={category} path={category.replace(' ', '')} element={<AllCategories category={category} />} />
            ))
          }
          {
            categories.map((category) => (
              <Route key={category} path={category.replace(' ', '') + '/:id'} element={<SingleCategory />} />
            ))
          }
        </Routes>
        <FeedBack />
        <Footer />
      </Router>
    </>
  )
}

export default App
