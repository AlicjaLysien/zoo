import { React } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import AnimalsPage from "../pages/AnimalsPage.js";
import AnimalsList from "../pages/AnimalsList.js";
import PricesPage from "../pages/PricesPage.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import LoginPage from "../pages/LoginPage.js";
import ErrorPage from "../pages/ErrorPage.js";

const Page = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact component={ HomePage }/>
            <Route path="/animals" exact component={ AnimalsList }/>
            <Route path="/animals/:id" component={ AnimalsPage }/>
            <Route path="/prices" component={ PricesPage }/>
            <Route path="/contact" component={ ContactPage }/>
            <Route path="/admin" component={ AdminPage }/>
            <Route path="/login" component={ LoginPage }/>
            <Route component={ ErrorPage }/>
        </Switch>
        </>
    );
}

export default Page;