import React from 'react';
import Context from './context';
import initialState from './state';
import reducer from './reducer';
import actions from 'actions';
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {
    ...state,
    ...actions(dispatch)
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
