import React from 'react';
import Lightbox from '../components/Lightbox';

import img01 from "../images/reptiles/01.jpg";
import img02 from "../images/reptiles/02.jpg";
import img03 from "../images/reptiles/03.jpg";
import img04 from "../images/reptiles/04.jpg";
import img05 from "../images/reptiles/05.jpg";
import img06 from "../images/reptiles/06.jpg";
import img07 from "../images/reptiles/07.jpg";
import img08 from "../images/reptiles/08.jpg";
import img09 from "../images/reptiles/09.jpg";

const reptiles = [img01, img02, img03, img04, img05, img06, img07, img08, img09];

const ReptilesPage = () => {

    return (
        <Lightbox images={reptiles}/>
    );
}

export default ReptilesPage;