import actions from './actions';
const reducer = (state, action) => {
  switch (action.type) {
    case actions.INC1:
      return { ...state, num1: state.num1 + 1 };
    case actions.INC2:
      return { ...state, num2: state.num2 + 1 };
    default:
      return state;
  }
};

export default reducer;
