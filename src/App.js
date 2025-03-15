import React from 'react';
import Greeting from './components/Greeting'; 
import PetList from './components/PetList';  
import Footer from './components/Footer';  

function App() {
    return (
        <div>
            <Greeting /> 
            <PetList />
            <Footer year={2025} message="We appreciate your support!" /> 
        </div>
    );
}

export default App;