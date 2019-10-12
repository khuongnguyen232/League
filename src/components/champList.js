import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

import './champList.css';
import {baseURLImage} from '../API/baseURL';

const champList = ({list}) => {
  if(!list) {
    return <div>Loading data right now ...</div>
  }
    const champList = list.map((champ) => {
      let imageLink = baseURLImage + champ.image.full;
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  });

    return(
      <div className="grid-container">
        {champList};
      </div>
    )
  };

  const mapStateToProps = (state) => {
    console.log(state);
  };

  export default connect(mapStateToProps,{})(champList);
