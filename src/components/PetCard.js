import React from 'react';
import './PetCard.css';

function PetCard({ pet }) {
    return (
        <div className="pet-card">
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Price: ${pet.price}</p>
            <img src={pet.imageUrl} alt={pet.name} />
        </div>
    );
}

export default PetCard;
