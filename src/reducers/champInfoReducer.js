export default(state = null, action) => {
  switch (action.type) {
    case 'FETCH_CHAMP_INFO':
      return action.payload;
    default:
      return state;
  }
};
