import React from 'react';
import "./Main.css";
import Card from './card/Card';

export default function Main() {
    return (
        <main className='main'>
            <ul className='main__card-list'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </main>
    )
}
