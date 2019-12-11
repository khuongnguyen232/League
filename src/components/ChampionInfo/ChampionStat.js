import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const statsToDisplay = [
  {id:"hp",name:"HP",symbol:"per level",perLevel:"hpperlevel"},
  {id:"mp",name:"MP",symbol:"per level",perLevel:"mpperlevel"},
  {id:"armor",name:"Armor",symbol:"per level",perLevel:"armorlevel"},
  {id:"spellblock",name:"Magic Resist",symbol:"per level",perLevel:"spellblocklevel"},
  {id:"hpregen",name:"HP Regen",symbol:"per level",perLevel:"hpregenperlevel"},
  {id:"mpregen",name:"MP Regen",symbol:"per level",perLevel:"mpregenperlevel"},
  {id:"attackdamage",name:"Attack Damage",symbol:"per level",perLevel:"attackdamageperlevel"},
  {id:"attackspeed",name:"Attack Speed",symbol:"% per level",perLevel:"attackspeedperlevel"}
];

const championStat = ({stats}) => {
  const statslist = statsToDisplay.map((stat) => {
    return(
      <Col sm={6} key={stat.id}>
        <label>{stat.name}:</label>
        <div>
          {stats[stat.id]} ( + {stats[stat.perLevel]} {stat.symbol})
        </div>
      </Col>
    )

  })

  return(
    <Container>
      <Row>
        {statslist}
      </Row>
    </Container>
  );
};

export default championStat;
