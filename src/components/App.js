import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { cards } from './constants/constants';

function App() {
  const [resArr, setIsResArr] = useState([])
  const [favCards, setFavCards] = useState([]);
  const [shoppingCartCards, setShoppingCartCards] = useState([]);

  function _addId(arr) {
    return arr.map((el) => {
      const _id = Math.random().toString(16).slice(2)
      return el = { ...el, id: _id }
    })
  }

  function _addAndDelCard(card, arr) {
    let resArr = arr;
    if (!resArr.find(el => el.id === card.id)) {
      resArr = [...resArr, card]
    } else {
      resArr = resArr.filter(el => el.id !== card.id);
    };
    return resArr;
  }

  function hendlerFav(card) {
    setFavCards(_addAndDelCard(card, favCards));
  };

  function hendlerShoppingCart(card) {
    setShoppingCartCards(_addAndDelCard(card, shoppingCartCards));
  };

  useEffect(() => {
    //fetch('http://react.ohotaktiv.ru:5000/goods', { mods: 'no-cors' })
    // .then(async (response) => {
    //const arr = response.json()
    //setIsResArr(_addId(arr));
    //})
    //.catch(error => console.log('Error:', error));

  }, [])

  useEffect(() => {
    setIsResArr(_addId(cards));
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main cards={resArr} hendlerFav={hendlerFav} hendlerShoppingCart={hendlerShoppingCart} />} />
        <Route path='/favourites' element={<Main cards={favCards} hendlerFav={hendlerFav} hendlerShoppingCart={hendlerShoppingCart} />} />
        <Route path='/shopping-cart' element={<Main cards={shoppingCartCards} hendlerFav={hendlerFav} hendlerShoppingCart={hendlerShoppingCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
