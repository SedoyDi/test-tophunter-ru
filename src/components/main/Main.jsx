import React from 'react';
import "./Main.css";
import Card from './card/Card';

export default function Main({ cards, handleAddFav, handleAddStore }) {
    return (
        <main className='main'>
            <ul className='main__card-list'>
                {cards.map((card) => {
                    const _id = Math.random().toString(16).slice(2)
                    card = { ...card, _id: _id }
                    return <Card
                        key={card._id}
                        data={card} />
                })}
            </ul>
        </main>
    )
}
