import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MammalsPage from "../pages/MammalsPage";

const Animals = (props) => {
    return (
            <>
                <h1>{props.name}</h1>
                <Switch>
                    <Route path="/animals/mammals" component={ MammalsPage }/>      
                </Switch>
            </>
    );
}

export default Animals;