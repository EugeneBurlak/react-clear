import React from 'react';
import Context from './context';
import initialState from './state';
import reducer from './reducer';
import actions from './actions';
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {
    ...state,
    inc1: () => {
      dispatch({ type: actions.INC1})
    },
    inc2: () => {
      dispatch({ type: actions.INC2})
    }
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
