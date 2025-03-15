import React from 'react';
import Greeting from './components/Greeting'; 
import Footer from './components/Footer';  

function App() {
    return (
        <div>
            <Greeting /> 
            {/* <Footer />  */}
            <Footer year={2025} message="We appreciate your support!" /> 
        </div>
    );
}

export default App;