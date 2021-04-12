import React from 'react';

const Animals = (props) => {
    return (
            <>
                <h1>{props.name}</h1>
                <img src={props.image} />
            </>
    );
}

export default Animals;