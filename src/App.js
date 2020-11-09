import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './pages/Home';
import Result from './pages/Result';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent title={"Finding Falcon"} button={{title: "Github", link: "https://www.github.com/guptahardik17"}}/>
            <Switch> 
              <Route path="/result" component={Result}/>
              <Route path="/" component={Home}/>
            </Switch>
          <FooterComponent content={"Developed by Hardik Gupta"}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(App);