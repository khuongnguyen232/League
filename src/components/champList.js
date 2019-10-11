import React from 'react';
import './champList.css';
import Axios from '.././API/champList';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const champList = ({list}) => {
  if(!list) {
    return <div>Loading data right now ...</div>
  }
    const champList = list.map((champ) => {
      let imageLink = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + champ.image.full;
    return (
      <div key= {champ.id} class="grid-item">
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
      <div class="grid-container">
        {champList};
      </div>
    )
  };
export default champList;
