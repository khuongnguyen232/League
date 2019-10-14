import champList from '../API/champList'

export const fetchChamps = () => async (dispatch) => {
    const response = await champList.get('/champion.json');
    let tempList = [];
    if(response.data.data) {
      for(let prop in response.data.data) {
        tempList.push(response.data.data[prop]);
      }
    }
    dispatch({type:'FETCH_CHAMP',payload:tempList});
};

export const fetchChampInfo = (id) => async (dispatch) => {
    const response = await champList.get('/champion/' + id + ".json");
    dispatch({type:'FETCH_CHAMP_INFO',payload:response.data});
};
