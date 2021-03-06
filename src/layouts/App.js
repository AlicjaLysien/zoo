import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.sass';
import {BrowserRouter as HashRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Advertisement from './Advertisement';
import Page from './Page';
import Title from './Title';


function App() {
  return (
      <div className="app">
          <header>
            { <Header /> }
          </header>
          <main>
            <aside>
              { <Navigation /> }
              { <Advertisement /> }
            </aside>
            <section className="page">
              { <Title /> }
              { <Page /> }
            </section>
          </main>
          <footer>
            { <Footer /> }
          </footer>
      </div>
  );
}

export default App;
