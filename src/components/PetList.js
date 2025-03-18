import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';

const apiUrl = process.env.REACT_APP_API_URL;


function PetList() {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');
    

    useEffect(() => {
        console.log("Fetching pets data...");
        axios.get(`${apiUrl}/pets`)
            .then(res => {
                console.log("result", res);
                setPets(res.data);
            })
            .catch(err => {
                console.error("Error fetching pets data:", err);
                setError(err.message);
            });
    }, []);

    console.log("PetList component rendered");

    return (
        <div className="pet-list">
            {error && <p className="text-danger">{error}</p>}
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
}

export default PetList;
