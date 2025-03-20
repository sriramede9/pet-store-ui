import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';
import PetDetails from './PetDetails';

function PetDetails({pet}) {
    return (
        <div>
                <PetCard key={pet.id} pet={pet}  />
        </div>
    );
}

export default PetDetails;
