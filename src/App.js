import React from 'react';
import Greeting from './components/Greeting'; 
import PetList from './components/PetList';  
import Footer from './components/Footer';  
import Click from './components/Click';
import AddPet from './components/AddPetForm';
import AddPetForm from './components/AddPetForm';

function App() {
    return (
        <div>
            <Greeting /> 
            <AddPetForm />
            <PetList />
            <Footer year={2025} message="We appreciate your support!" /> 
            {/* <Click /> */}
        </div>
    );
}

export default App;