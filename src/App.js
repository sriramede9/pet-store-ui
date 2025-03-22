import React from 'react';
import Greeting from './components/Greeting'; 
import PetList from './components/PetList';  
import Footer from './components/Footer';  
import PetDetails from './components/PetDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        </Routes>
    );
}

export default App;