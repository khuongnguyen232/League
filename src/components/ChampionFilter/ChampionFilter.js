import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap';

import {getFilterList} from '../../actions';
import {ChampionTags} from '../../static/constant';
import ListModal from '../ChampionList/ListModal';

class ChampionFilter extends React.Component {
  state={typeToFilter:[]}

  componentDidMount() {
    this.props.getFilterList(this.state.typeToFilter);
  }

  onButtonClick = (event) => {
    //console.log(event.target.value);
    const tempTags = this.state.typeToFilter;
    if(event.target.checked) {
      tempTags.push(event.target.value);
    } else {
      //if the value doesn't exist, indexOf return -1, and Splice will cut off nothing
      const index = tempTags.indexOf(event.target.value);
      tempTags.splice(index,index);
    }
    this.setState({typeToFilter:tempTags}, () => {
      //console.log(this.state.typeToFilter);
      this.props.getFilterList(this.state.typeToFilter);
    })
  }

  render() {
    const checkList = ChampionTags.map((tag) => {
      return(
        <Form.Check custom inline label={tag} type="checkbox" key={tag} id={`custom-inline-checkbox-${tag}`} onClick={this.onButtonClick} value={tag}/>
      );
    });

    return(
      <div>
        {checkList}
        <ListModal list={this.props.filterList} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { filterList:state.filterList}
};

export default connect(mapStateToProps,{getFilterList})(ChampionFilter);
