import React from 'react';
import {connect} from 'react-redux';

const champInfo = ({match,champInfo}) => {
  let champName= match.params.champName;
  if(!champInfo) {
    return(
      <div>Loading data ... </div>
    );
  };
  return(
    <div>
      <h1>{champInfo.data[champName].id}</h1>
      <h3>{champInfo.data[champName].title}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return { champInfo:state.champInfo}
};

export default connect(mapStateToProps)(champInfo);
