import Spinner from 'react-spinner-material';
import React from 'react';

 const Loader =()=> {

  return (
      <div>
        <Spinner radius={23} color={"#fff"} stroke={2} visible={true} />
      </div>
    );

}

export default Loader