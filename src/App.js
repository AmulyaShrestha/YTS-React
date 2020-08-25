import React from "react";
import './index.css';
import './styles/styles.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import BrowseMovies from "./components/browseMovies/BrowseMovies";
import MovieDetails from './components/movieDetails/MovieDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />

          <Switch className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/browse-movies" component={BrowseMovies} />
            <Route exact path="/movie/:id/:slug" component={MovieDetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;