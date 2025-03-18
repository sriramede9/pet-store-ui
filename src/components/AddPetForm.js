import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;


function AddPetForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            name,
            breed,
            price,
            imageUrl
        };

        axios.post(`${apiUrl}/pets`, newPet)
            .then(res => {
                console.log('Pet added:', res.data);
                // Optionally, reset form fields
                setName('');
                setBreed('');
                setPrice(0);
                setImageUrl('');
            })
            .catch(err => {
                console.error('Error adding pet:', err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Breed:
                <input type="text" value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <br />
            <label>
                Price:
                <input type="number" value={price} onChange={e => setPrice(e.target.valueAsNumber)} />
            </label>
            <br />
            <label>
                Image URL:
                <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Pet</button>
        </form>
    );
}

export default AddPetForm;
