import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import './css/index.css';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Home />
    <Footer/>
  </React.StrictMode>,
)
