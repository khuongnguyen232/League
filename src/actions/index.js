import champList from '../API/champList';
import _ from 'lodash';

export const fetchChamps = () => (dispatch) => fetchAllChamps(dispatch);

const fetchAllChamps = _.memoize(async (dispatch) => {
    const response = await champList.get('/champion.json');
    let tempList = [];
    if (response.data.data) {
        for (let prop in response.data.data) {
            tempList.push(response.data.data[prop]);
        }
    }
    dispatch({ type: 'FETCH_CHAMP', payload: tempList });
});

export const fetchChampInfo = (id) => async (dispatch) => {
    const response = await champList.get(`/champion/${id}.json`);
    dispatch({type:'FETCH_CHAMP_INFO',payload:response.data});
};

//champType will be an array
export const getFilterList = (champType) => async (dispatch,getState) => {
  const {champs} = getState();
  let filterList = [];

  if(champType.length > 0) {
    for(let champ of champs) {
      for(let tag of champType) {
        if(champ.tags.indexOf(tag) !== -1) {
          filterList.push(champ);
          break;
        }
      }
    }
  }

  dispatch({type:'GET_FILTER_LIST',payload:filterList});
}
