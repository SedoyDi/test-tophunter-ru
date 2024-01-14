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
      return el = { ...el, id: _id, fav: false, shoppingCart: false }
    })
  }

  function hendlerFav(card) {
    let resArr = favCards;
    if (!resArr.find(el => el.id === card.id)) {
      resArr = [...resArr, card]
    } else {
      resArr = resArr.filter(el => el.id !== card.id);
    };
    setFavCards(resArr);
  };

  function hendlerShoppingCart(card) {
    let resArr = shoppingCartCards;
    if (!resArr.find(el => el.id === card.id)) {
      resArr = [...resArr, card]
    } else {
      resArr = resArr.filter(el => el.id !== card.id);
    };
    setShoppingCartCards(resArr);
  };

  useEffect(() => {
    fetch('http://react.ohotaktiv.ru:5000/goods', { mods: 'no-cors' })
      .then(async response => console.log(await response.json()))
      .catch(error => console.log('Error:', error));
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
