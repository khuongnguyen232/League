import React from 'react';
import {Card, Accordion,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import SpinnerTab from './SpinnerTab';

import './champList.css';
import {baseURLImage} from '../API/baseURL';


const champList = ({list}) => {
  if(list.length === 0) {
    return <SpinnerTab />;
  }
    const champList = list.map((champ) => {
      let imageLink = baseURLImage + champ.image.full;
      let champInfoLink = "/champion/" + champ.id;
    return (
      <div key= {champ.id} className="grid-item">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <img src= {imageLink} alt="avatar" width="50%" height="50%"></img>
                <p><strong>{champ.id}</strong></p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>HP: {champ.stats.hp}  MP:{champ.stats.mp}</p>
                <Link to= {champInfoLink}>More Info</Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  });

    return(
      <div>
        <h1>Champion List:</h1>
        <div className="grid-container">
          {champList};
        </div>
      </div>
    )
  };

  const mapStateToProps = (state) => {
    //console.log(state);
    return { list:state.champs}
  };

  export default connect(mapStateToProps)(champList);
