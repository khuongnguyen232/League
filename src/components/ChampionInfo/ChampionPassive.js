//should optimize the code so we can merge the ChampionSkill and ChampionSkill together
import React from 'react';
import {Col, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

import {basedPassiveImage} from '../../API/baseURL';

const ChampionPassive = ({skill}) => {
  const skillLink = basedPassiveImage + skill.image.full;

  return(
    <Col xs={4} md={2} key={skill.id}>
      <OverlayTrigger placement='left' overlay={
        <Tooltip id={`tooltip-left`}>
          <h4>{skill.name}</h4>
          <div>{skill.description}</div>
        </Tooltip>}
        >

        <Image src={skillLink} rounded/>
      </OverlayTrigger>
    </Col>
  );
};

export default ChampionPassive;
