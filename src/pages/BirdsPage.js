import React from 'react';
import Gallery from '../components/Gallery';

import img01 from "../images/birds/01.jpg";
import img02 from "../images/birds/02.jpg";
import img03 from "../images/birds/03.jpg";
import img04 from "../images/birds/04.jpg";
import img05 from "../images/birds/05.jpg";
import img06 from "../images/birds/06.jpg";
import img07 from "../images/birds/07.jpg";


const birds = [img01, img02, img03, img04, img05, img06, img07];


const BirdsPage = () => {

    return (
        <Gallery photos={birds}/>
    );
}

export default BirdsPage;