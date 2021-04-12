import React from 'react';
import { Link } from 'react-router-dom';
import Animals from "../components/Animals"

const AnimalsPage = ({match}) => {
    return (
        <>
        <div>Strona animals</div>
        <Animals name={match.params.name} image={match.params.image}/>
        <Link to="/animals">Back</Link>
        </>
    );
}

export default AnimalsPage;