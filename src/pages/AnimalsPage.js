import React from 'react';
import { Link } from 'react-router-dom';
import Animals from "../components/Animals";


const AnimalsPage = ({match}) => {
    
    return (
        <>
            <Link to="/animals">Back</Link>
            <Animals name={match.params.id}/>
        </>
    );
}

export default AnimalsPage;