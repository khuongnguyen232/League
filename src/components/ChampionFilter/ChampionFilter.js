import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap';

import {getFilterList} from '../../actions';
import {ChampionTags} from '../../static/constant';
import ListModal from '../ChampionList/ListModal';

class ChampionFilter extends React.Component {
  state={typeToFilter:[]};

  //handle the onClick event after click the checkbox
  onButtonClick = (event) => {
    const tempTags = this.state.typeToFilter;
    if(event.target.checked) {
      tempTags.push(event.target.value);
    } else {
      //if the value doesn't exist, indexOf return -1, and Splice will cut off nothing
      const index = tempTags.indexOf(event.target.value);
      if(index > -1) {
        tempTags.splice(index,1);
      }
    }
    this.setState({typeToFilter:tempTags}, () => {
      this.props.getFilterList(this.state.typeToFilter);
    })
  }

  render() {
    const checkList = ChampionTags.map((tag) => {
      return(
        <Form.Check custom inline label={tag} type="checkbox" key={tag} id={`custom-inline-checkbox-${tag}`} onClick={this.onButtonClick} value={tag}/>
      );
    });
    const centerStyle = { position: "fixed", top: "50%", left: "25%"};
    return(
      <div>
        {checkList}

        {this.state.typeToFilter.length ? (
          <ListModal list={this.props.filterList} />
          ) : (
            <h1 className = "text-center" style={centerStyle}>
              Please use the checkbox to filter based on the champion type
            </h1>
          )
        }
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { filterList:state.filterList}
};

export default connect(mapStateToProps,{getFilterList})(ChampionFilter);
