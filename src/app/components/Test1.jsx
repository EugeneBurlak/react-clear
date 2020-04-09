import React from 'react';
import Context from 'store/context';
import { Link } from 'react-router-dom';
const func = () => {
  const { num1, inc1 } = React.useContext(Context);
  return React.useMemo(() => {
    return (
      <>
        <div
          onClick={() => {
            inc1('222');
          }}
        >
          test {num1}
        </div>
        <Link to={'/projects'}>dsa</Link>
      </>
    );
  }, [num1]);
};
export default func;
