import React from 'react';
import Context from 'store/context';
import { Link } from 'react-router-dom';
const func = () => {
  const { num2, inc2 } = React.useContext(Context);
  return React.useMemo(() => {
    return (
      <>
        <div onClick={inc2}>test {num2}</div>
        <Link to={'/'}>dsa</Link>
      </>
    );
  }, [num2]);
};
export default func;
