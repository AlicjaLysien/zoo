import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.sass';
import {BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';
import Title from './Title';

function App() {
  return (
    <Router>
      <div className="app">
          <header>
            { <Header /> }
          </header>
          <main>
            <aside>
              { <Navigation /> }
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
    </Router>
  );
}

export default App;
