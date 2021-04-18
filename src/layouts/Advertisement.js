import { React } from "react";
import img1 from "../images/advertisement/img1.png";
import img2 from "../images/advertisement/img2.png";
import img3 from "../images/advertisement/img3.png";

const Advertisement = () => {

    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3);
    const advertisement = images[index];

    return (
        <div className="advertisement">
            <img src={advertisement} />
        </div>
    );
}

export default Advertisement;