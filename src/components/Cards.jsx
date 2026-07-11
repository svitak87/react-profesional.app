import React from 'react'
import './Cards.css'
import { Card } from './Card.jsx'

export const Cards = ({ data }) => {
    return (
        <div className='cards-container'>
            {data && (
                data.results.map((character) => (
                    <Card key={character.id} values={{ ...character }} />
                ))
            )}
        </div>
    )
}
