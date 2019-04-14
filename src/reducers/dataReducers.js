// ==============================================================================================================
// MODAL REDUCER
// ==============================================================================================================
// reducers take our state, an action, and return a new state

const dataReducerDeafultState = {
  data: []
}

export default (state = dataReducerDeafultState, action) => {
  switch (action.type) {
    case 'INITIALIZE_DATA':
    default:
      return state;
  }
};
