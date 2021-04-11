import { React } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import AnimalsPage from "../pages/AnimalsPage.js";
import PricesPage from "../pages/PricesPage.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import ErrorPage from "../pages/ErrorPage.js";

const Page = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact component={ HomePage }/>
            <Route path="/animals" component={ AnimalsPage }/>
            <Route path="/prices" component={ PricesPage }/>
            <Route path="/contact" component={ ContactPage }/>
            <Route path="/admin" component={ AdminPage }/>
            <Route component={ ErrorPage }/>
        </Switch>
        </>
    );
}

export default Page;