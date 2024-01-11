import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/favourites' element={<Main />} />
        <Route path='/shopping-cart' element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
