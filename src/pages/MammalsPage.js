import React from 'react';
import Gallery from '../components/Gallery';

import imgM01 from "../images/man/01.jpg";
import imgM02 from "../images/man/02.jpg";
import imgM03 from "../images/man/03.jpg";

const mammals = [imgM01, imgM02, imgM03];


const MammalsPage = () => {

    return (
        <Gallery photos={mammals}/>
    );
}

export default MammalsPage;