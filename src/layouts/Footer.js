import { React } from "react";
import { Route, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Route path="/" exact
                render={() => (
                    <p>You are at main page.</p>
                )}
            />
            <Route path="/:id" exact 
                render={(props) => (
                    <p>You are at page <i>{props.match.params.id}</i>. Go to <Link to={`/`}>main page</Link>.</p>
                )}
            />
            <Route path="/:id/:animals" exact 
                render={(props) => (
                    <p>You are at page <i>{props.match.params.animals}</i>. Go to <Link to={`/`}>main page</Link>.</p>
                )}
            />
        </div>
    );
}

export default Footer;