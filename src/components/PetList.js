import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';
import PetDetails from './PetDetails';

function PetList() {
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/pets`)
            .then(res => {
                setPets(res.data);
            })
            .catch(err => {
                console.error('Error fetching pets:', err);
            });
    }, []);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
    };

    return (
        <div>
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} onClick={() => handlePetClick(pet)} />
            ))}
            {selectedPet && <PetDetails pet={selectedPet} />}
        </div>
    );
}

export default PetList;
