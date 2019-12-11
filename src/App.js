import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import champInfo from './components/ChampionInfo/champInfo';
import ChampList from './components/ChampionList/champList';
import ChampionFilter from './components/ChampionFilter/ChampionFilter';
import Page404 from './Page404/Page404';
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
            <Switch>
              <Route exact path="/" component={ChampList} />
              <Route path="/filter" component={ChampionFilter} />
              <Route path="/champion/:champName" component={champInfo} />
              <Route path="/*" component={Page404} status={404} />
            </Switch>

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
