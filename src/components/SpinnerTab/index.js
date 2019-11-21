import React from 'react';
import {Spinner} from 'react-bootstrap';

//setting the stule for spinner - to be centered
const style = { position: "fixed", top: "50%", left: "50%"};

const SpinnerTab = () => {
  return(
    <Spinner animation="border" role="status"  style={style}>
      <span className="sr-only">Loading data...</span>
    </Spinner>
  );
};

export default SpinnerTab;
