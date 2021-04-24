import { React } from "react";
import img1 from "../images/advertisement/img1.png";
import img2 from "../images/advertisement/img2.png";
import img3 from "../images/advertisement/img3.png";
import img4 from "../images/advertisement/img4.png";
import img5 from "../images/advertisement/img5.png";
import img6 from "../images/advertisement/img6.png";

const Advertisement = () => {

    const images = [img1, img2, img3, img4, img5, img6];
    const index = Math.floor(Math.random() * 6);
    const advertisement = images[index];

    return (
        <div className="advertisement">
            <img src={advertisement} />
        </div>
    );
}

export default Advertisement;