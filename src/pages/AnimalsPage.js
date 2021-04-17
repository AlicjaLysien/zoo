import React from 'react';
import { Link } from 'react-router-dom';
import Animals from "../components/Animals";


const AnimalsPage = () => {
    
    return (
        <>
            <Link class="back" to="/animals">Back</Link>
            <Animals />
        </>
    );
}

export default AnimalsPage;