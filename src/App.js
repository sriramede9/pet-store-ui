import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ListGroup from './components/ListGroup';
import { Button } from 'bootstrap';

function App() {
    return (
        <Routes>
                {/* <Route path="/" element={<><PetList /><Footer year={2025} /></>} />
                <Route path="/pet/:id" element={<PetDetails />} /> */}
                <Route path="/" element={<><ListGroup /> <Button/></>} />
        </Routes>
    );
}

export default App;