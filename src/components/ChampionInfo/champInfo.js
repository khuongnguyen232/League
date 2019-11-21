import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Image} from 'react-bootstrap';

import {fetchChampInfo} from '../../actions';
import {baseLoadingImage} from '../../API/baseURL';

import SpinnerTab from '../SpinnerTab';
import ChampionSkill from './ChampionSkill';
import ChampionPassive from './ChampionPassive';
import ChampionStat from './ChampionStat';

class champInfo extends React.Component {

  componentDidMount(){
    this.props.fetchChampInfo(this.props.match.params.champName)
  }

  render() {
    const champName = this.props.match.params.champName;
    //handled data error before do anything else
    if(!this.props.champInfo || !this.props.champInfo.data[champName]) {
      return <SpinnerTab />;
    }

    const imageLink = baseLoadingImage + this.props.match.params.champName + '_0.jpg';

    const theChampion = this.props.champInfo.data[champName];

    const skillList = theChampion.spells.map((skill) => {
      return (
        <ChampionSkill skill={skill}/>
      )
    });

    return(
      <div>
        <h1 className="text-center">{theChampion.id}</h1>
        <h3 className="text-center">{theChampion.title}</h3>
        <Container>
          <Row>
            <Col sm={4}>
              <Image src= {imageLink} alt="avatar" fluid />
            </Col>

            <Col sm={8} className="center">
              <h3>Lore</h3>
              <div>
                {theChampion.lore}
              </div>

              <h3>Abilities</h3>
              <Row className="justify-content-md-center">
                <ChampionPassive skill={theChampion.passive}/>
                {skillList}
              </Row>

              <h3>Stats</h3>
              <ChampionStat stats={theChampion.stats}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

const mapStateToProps = (state,ownProps) => {
  return { champInfo:state.champInfo}
};

export default connect(mapStateToProps,{fetchChampInfo})(champInfo);
