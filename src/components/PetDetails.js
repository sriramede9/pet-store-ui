import React, { useState, useEffect } from 'react';


function PetDetails({pet}) {
    return (
        <div>
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Price: ${pet.price}</p>
            <img src={pet.imageUrl} alt={pet.name} />
        </div>
    );
}

export default PetDetails;
