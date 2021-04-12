import React from 'react';
import { Link } from "react-router-dom";
import image01 from "../images/man/01.jpg";
import image02 from "../images/rep/01.jpg";

const animals = [
    {name: "man", image: image01},
    {name: "rep", image: image02}
]

const AnimalsList = () => {

    const list = animals.map(item => (
        <Link to={`/animals/${item.name}`} className="col-md-4">
            <div className="bg" style={{backgroundImage: `url(${item.image})`}}>
            </div>
            <div className="link">
                {item.name}
            </div>
        </ Link>
    ))

    return (
        <div className="animals-list container">
            <div className="row">
                {list}
            </div>
        </div>
    );
}

export default AnimalsList;