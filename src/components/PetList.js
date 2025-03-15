// src/components/PetList.js
import React from 'react';
import PetCard from './PetCard';
import { pets } from '../data/Pet';

function PetList() {
    return (
        <div className="pet-list">
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
}

export default PetList;
