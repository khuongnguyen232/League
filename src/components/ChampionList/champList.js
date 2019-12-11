import React from 'react';
import {connect} from 'react-redux';

import SpinnerTab from '../SpinnerTab';
import ListModal from './ListModal';

const champList = ({list}) => {
  if(list.length === 0) {
    return <SpinnerTab />;
  }

  return <ListModal list={list}/>

}

  const mapStateToProps = (state) => {
    //console.log(state);
    return { list:state.champs}
  };

export default connect(mapStateToProps)(champList);
