import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ListGroup from './components/ListGroup';
import  Button  from './components/Button';

function App() {
    return (
        <Routes>
                {/* <Route path="/" element={<><PetList /><Footer year={2025} /></>} />
                <Route path="/pet/:id" element={<PetDetails />} /> */}
                <Route path="/" element={<Button/>} />
        </Routes>
    );
}

export default App;