import React from 'react';
import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";

import SpinnerTab from '../SpinnerTab';
import './champList.css';
import {baseURLImage} from '../../API/baseURL';

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

const ListModal = ({list}) => {
  if(list.length === 0) {
    return <SpinnerTab />;
  }
    const champList = list.map((champ) => {
    let imageLink = baseURLImage + champ.image.full;
    let champInfoLink = "/champion/" + champ.id;

    return (
      <Col xs={12} sm={6} md={3} key= {champ.id} style={{paddingBottom:'2%'}}>
        <Card bg="dark" text="white">
          <Card.Header><Image src= {imageLink} alt="avatar"></Image><
          /Card.Header>
          <Card.Body>
            <Card.Title>
              <Link to={champInfoLink}><h3>{champ.name}</h3></Link>
            </Card.Title>

            <Card.Text>
              {capitalize(champ.title)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  });

    return(
      <Container className="text-center">
        <h1>Champion List</h1>
        <Row>
          {champList}
        </Row>
      </Container>
    )
};

export default ListModal;
