import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import champInfo from './components/champInfo';

import ChampList from './components/champList';
import {fetchChamps} from './actions';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchChamps();
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ChampList} />
          <Route exact path="/champion/:champName" component={champInfo} />
        </div>

      </Router>
    );
  };
};

const mapStateToProps = (state) => {
  return { champs:state.champs}
};

export default connect(mapStateToProps,{fetchChamps})(App);
