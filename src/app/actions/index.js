import actions from 'store/actions';

const actionsList = (dispatch) => {
  return {
    inc1: (value) => {
      dispatch({ type: actions.INC1 });
    },
    inc2: (value) => {
      dispatch({ type: actions.INC2 });
    }
  }
}

export default actionsList;
