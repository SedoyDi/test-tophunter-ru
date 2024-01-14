import React from 'react';
import "./Main.css";
import Card from './card/Card';

export default function Main({ cards, hendlerFav, hendlerShoppingCart }) {


    return (
        <main className='main'>
            <ul className='main__card-list'>
                {cards.length === 0 ?
                    <h2> Ничего не добавлено </h2> :
                    cards.map((card) => {
                        return <Card
                            key={card.id}
                            data={card}
                            hendlerFav={hendlerFav}
                            hendlerShoppingCart={hendlerShoppingCart} />
                    })}
            </ul>
        </main>
    )
}
