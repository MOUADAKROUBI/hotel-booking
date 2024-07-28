import React, {  } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import FeedBack from './Components/FeedBack';
import Home from './Components/Home/Home';
import Header from './Components/header';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FeedBack />
        <Footer />
      </Router>
    </>
  )
}

export default App
