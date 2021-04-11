import { React } from "react";
import { Route, Switch } from "react-router-dom";
import header01 from "../images/header01.jpg";
import header02 from "../images/header02.jpg";
import header03 from "../images/header03.jpg";
import header04 from "../images/header04.jpg";
import header05 from "../images/header05.jpg";

const Header = () => {
    const images = [header01, header02, header03, header04, header05];
    const index = Math.floor(Math.random() * 5);
    const headerRandom = images[index];

    return (
        <>
        <Switch>
            <Route path="/" exact render={()=> (
                <img src={header01} />
            )} />
            <Route path="/animals" render={()=> (
                <img src={header02} />
            )} />
            <Route path="/sponsorship" render={()=> (
                <img src={header03} />
            )} />
            <Route path="/contact" render={()=> (
                <img src={header04} />
            )} />
            <Route path="/admin" render={()=> (
                <img src={header05} />
            )} />
            <Route render={()=> (
                <img src={headerRandom} />
            )} />
        </Switch>
        </>
    );
}

export default Header;