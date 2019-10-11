import React from 'react';

import Axios from './API/champList';
import ChampList from './components/champList';

class App extends React.Component {

  state = {list:null};

  getChampionList = async () => {
    const response = await Axios.get('/champion.json');
    let tempList = [];
    if(response.data.data) {
      for(let prop in response.data.data) {
        tempList.push(response.data.data[prop]);
      }
    }
    this.setState({list:tempList});
  }

  componentDidMount() {
    this.getChampionList();
  }

  render() {
    return (
      <div>
        <h1>Champion List:</h1>
        <ChampList list= {this.state.list} />
      </div>
    );
  };
};

export default App;
