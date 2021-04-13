import React from 'react';
import { Link } from "react-router-dom";
import image01 from "../images/mammals/01.jpg";
import image02 from "../images/reptiles/01.jpg";
import image03 from "../images/birds/01.jpg";

const animals = [
    {name: "mammals", url: "mammals", image: image01, describtion: "asdasd"},
    {name: "reptiles and amphibians", url: "reptiles", image: image02, describtion: "sfaerwtbc"},
    {name: "birds", url: "birds", image: image03, describtion: "describtion 03"}
]

const AnimalsList = () => {

    const list = animals.map(item => (
        <Link to={`/animals/${item.url}`} className="col-md-4" >
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