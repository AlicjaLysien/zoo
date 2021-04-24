import { React } from "react";
import { Route, Switch } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import header01 from "../images/header01.jpg";
import header02 from "../images/header02.jpg";
import header03 from "../images/header03.jpg";
import header04 from "../images/header04.jpg";
import header05 from "../images/header05.jpg";

const photos = [header01, header02, header03, header04, header05]

const Header = () => {

    const slider = photos.map(photo => (
        <Carousel.Item className="CarouselItem">         
            <div className="bg" style={{backgroundImage: `url(${photo})`}}>
                <div className="overlay"></div>
            </div>
            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
    ))

    return(
    <>
        <Carousel>
            {slider}
        </Carousel>
    <h3 className="title">Welcome to Zoo!</h3>
    </>
    );
}

export default Header;