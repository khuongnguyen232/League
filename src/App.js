import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import champInfo from './components/champInfo';
import ChampList from './components/champList';
import {fetchChamps} from './actions';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {

  changeBodyStyle = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Adobe Garamond Pro";
  }

  componentDidMount() {
    this.changeBodyStyle();
    this.props.fetchChamps();
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/champion/:champName" component={champInfo} />
          <Route exact path="/" component={ChampList} />
        </div>
      </Router>
    );
  };
};

const mapStateToProps = (state) => {
  //console.log(state.champs[0]);
  return { champs:state.champs}
};

export default connect(mapStateToProps,{fetchChamps})(App);
