import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";

import styles from './App.module.css'

const App = () => {
  return (
    <div id="main">
      <Router>
        <Navbar />
        <main className={styles.main}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/shop" exact>
              <Shop />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
