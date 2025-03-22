import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function PetDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [pet, setPet] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/pets/${id}`)
            .then(res => {
                setPet(res.data);
            })
            .catch(err => {
                console.error('Error fetching pet:', err);
            });
    }, [id]);

    if (!pet) return <div>Loading...</div>;

    return (
        <div>
            <h2>Pet Details</h2>
            <p>Name: {pet.name}</p>
            <p>Breed: {pet.breed}</p>
            <p>Price: ${pet.price}</p>
            <p>Image URL: {pet.imageUrl}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default PetDetails;
