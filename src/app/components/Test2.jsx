import React from 'react';
import Context from 'store/context';
const func = () => {
  const { num2, inc2 } = React.useContext(Context);
  return React.useMemo(() => {
    return <div onClick={inc2}>test {num2}</div>;
  }, [num2])
};
export default func;
