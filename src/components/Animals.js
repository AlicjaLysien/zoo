import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MammalsPage from "../pages/MammalsPage";
import ReptilesPage from "../pages/ReptilesPage";
import BirdsPage from "../pages/BirdsPage";

const Animals = () => {
    return (
            <>
                <Switch>
                    <Route path="/animals/mammals" component={ MammalsPage }/>
                    <Route path="/animals/reptiles" component={ ReptilesPage }/>            
                    <Route path="/animals/birds" component={ BirdsPage }/>   
                </Switch>
            </>
    );
}

export default Animals;