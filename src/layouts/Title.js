import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'animate.css';

const Title = (props) => {
console.log(props);
    return (
        <>
        <Switch>
            <Route path="/" exact render={()=> (
                <h1 class="news">News</h1>
            )} />
            <Route path="/animals" render={()=> (
                <h1>Animals</h1>
            )} />
            <Route path="/prices" render={()=> (
                <h1>Prices</h1>
            )} />
            <Route path="/contact" render={()=> (
                <h1>Contact us</h1>
            )} />
            <Route path="/login" render={()=> (
                <h1>Admin panel</h1>
            )} />
            <Route render={()=> (
                <h1>404</h1>
            )} />
        </Switch>
        </>
    );
}

export default Title;