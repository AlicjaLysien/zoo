import React from 'react';
import Lightbox from '../components/Lightbox';

import img01 from "../images/mammals/01.jpg";
import img02 from "../images/mammals/02.jpg";
import img03 from "../images/mammals/03.jpg";
import img04 from "../images/mammals/04.jpg";
import img05 from "../images/mammals/05.jpg";
import img06 from "../images/mammals/06.jpg";
import img07 from "../images/mammals/07.jpg";
import img08 from "../images/mammals/08.jpg";
import img09 from "../images/mammals/09.jpg";
import img10 from "../images/mammals/10.jpg";
import img11 from "../images/mammals/11.jpg";
import img12 from "../images/mammals/12.jpg";

const mammals = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12];

const MammalsPage = () => {

    return (
        <Lightbox images={mammals}/>
    );
}

export default MammalsPage;