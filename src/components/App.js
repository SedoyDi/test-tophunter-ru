import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { cards } from './constants/constants';

function App() {

  const [favCards, setFavCards] = useState([]);
  const [storeCards, setStoreCards] = useState([]);
  useEffect(() => {
    //fetch('http://react.ohotaktiv.ru:5000/goods', { mods: 'no-cors' })
    //.then(response => response.json())
    //.then(data => console.log(data));
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main cards={cards} />} />
        <Route path='/favourites' element={<Main cards={favCards} />} />
        <Route path='/shopping-cart' element={<Main cards={storeCards} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
