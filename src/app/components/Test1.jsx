import React from 'react';
import Context from 'store/context';
const func = () => {
  const { num1, inc1 } = React.useContext(Context);
  return React.useMemo(() => {
    return <div onClick={inc1}>test {num1}</div>;
  }, [num1])
};
export default func;
