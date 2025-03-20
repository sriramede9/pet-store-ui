import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';

function PetList() {
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);

    useEffect(() => {
        console.log("Fetching pets data...");
        axios.get(`${process.env.REACT_APP_API_URL}/pets`)
            .then(res => {
                console.log("Pets fetched:", res.data);
                setPets(res.data);
            })
            .catch(err => {
                console.error('Error fetching pets:', err);
            });
    }, []);

    const handlePetClick = (pet) => {
        console.log("Pet clicked:", pet);
        setSelectedPet(pet);
        console.log("Selected pet updated:", selectedPet);
    };

    console.log("PetList component rendered");

    return (
        <div>
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} onClick={() => handlePetClick(pet)} />
            ))}

         {selectedPet && (
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h2>Selected Pet Details</h2>
                    <p><strong>Name:</strong> {selectedPet.name}</p>
                    <p><strong>Description:</strong> {selectedPet.breed}</p>
                    {/* Add more details as needed */}
                </div>
            )}

        </div>
    );
}

export default PetList;
