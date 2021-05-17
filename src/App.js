import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, Redirect } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer';
import React, { useEffect } from 'react'

const ScrollToTop = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location.pathname]);

  return null;
};

const ResetScroll = withRouter(ScrollToTop);


const App = () => {
  return (
    <Router>
      <ResetScroll />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
