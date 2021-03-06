import React from 'react';
import {Col, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

import {basedSkillImage} from '../../API/baseURL';

const ChampionSkill = ({skill}) => {
  const skillLink = basedSkillImage + skill.image.full;
  return(
    <Col xs={4} md={2}>
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

export default  ChampionSkill;
