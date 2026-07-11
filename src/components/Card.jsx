import React from 'react'
import './Card.css'

export const Card = ({ values }) => {
    const { name, status, image, species, location } = values

    return (
        <article className='card-container'>
            <section className='character-image-container'>
                <img
                    src={image}
                    alt={name}
                    className='character-image'
                />
            </section>
            <section className='character-info-container'>
                <div className='character-info'>
                    <h3 className='character-name'>{name}</h3>
                    <p>Especies: {species}</p>
                </div>
                <div className='character-info'>
                    <h2>Condition:</h2>
                    <p>{status}</p>
                </div>
                <div className='character-info'>
                    <h2>Location:</h2>
                    <p>{location.name}</p>
                </div>
            </section>
        </article>
    )
}
