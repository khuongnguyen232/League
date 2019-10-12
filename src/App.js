import React from 'react';
import {connect} from 'react-redux';

import ChampList from './components/champList';
import {fetchChamps} from './actions';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchChamps();
  }
  render() {
    return (
      <div>
        <h1>Champion List:</h1>
        <ChampList list= {this.props.champs} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { champs:state.champs}
};

export default connect(mapStateToProps,{fetchChamps})(App);
