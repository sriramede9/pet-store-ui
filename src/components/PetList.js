import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';
import { Link } from 'react-router-dom';

function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/pets`)
            .then(res => {
                setPets(res.data);
            })
            .catch(err => {
                console.error('Error fetching pets:', err);
            });
    }, []);

    return (
        <div>
            {pets.map(pet => (
                <Link key={pet.id} to={`/pet/${pet.id}`}>
                    <PetCard pet={pet} />
                </Link>
            ))}
        </div>
    );
}

export default PetList;
