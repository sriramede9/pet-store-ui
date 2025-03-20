import React from 'react';
import './PetCard.css';

function PetCard({ pet, onClick }) {
    return (
        <div className="pet-card" onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Price: ${pet.price}</p>
            <img src={pet.imageUrl} alt={pet.name} />
        </div>
    );
}

export default PetCard;
