import React, { useEffect } from 'react';
import "./Main.css";
import Card from './card/Card';

export default function Main() {
    const data = {
        "name": "Ружье Bernardelli MEGA NIBBIO GOLD кал. 12х76, п/а-газ., дерево, ствол 760мм",
        "picture": "https://ohotaktiv.ru/upload/iblock/d9d/54wvc05vv6j106ijpsommgfos8w1lp25.webp",
        "price": 141990.0,
        "quantity": 5
    };
    const dataPlug = {
        "name": "Ружье Bernardelli MEGA NIBBIO GOLD кал. 12х76, п/а-газ., дерево, ствол 760мм",
        "picture": "",
        "price": 141990.0,
        "quantity": 5
    };
    useEffect(() => {
        // fetch('http://react.ohotaktiv.ru:5000/goods', { mods: 'no-cors' })
        //    .then(response => response.json())
        //    .then(data => console.log(data));
    }, [])

    return (
        <main className='main'>
            <ul className='main__card-list'>
                <Card data={data} />
                <Card data={dataPlug} />
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
            </ul>
        </main>
    )
}
