import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import './champList.css';
import {baseURLImage} from '../API/baseURL';
import {fetchChampInfo} from '../actions';


const champList = ({list, fetchChampInfo}) => {
  if(list.length === 0) {
    return <div>Loading data right now ...</div>
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
                <Link to= {champInfoLink} onClick = {() => fetchChampInfo(champ.id)} >More Info</Link>
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
    console.log(state);
    return { list:state.champs}
  };

  export default connect(mapStateToProps, {fetchChampInfo})(champList);
