import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ListGroup from './components/ListGroup';

function App() {
    return (
        <Routes>
                {/* <Route path="/" element={<><PetList /><Footer year={2025} /></>} />
                <Route path="/pet/:id" element={<PetDetails />} /> */}
                <Route path="/" element={<ListGroup />} />
        </Routes>
    );
}

export default App;