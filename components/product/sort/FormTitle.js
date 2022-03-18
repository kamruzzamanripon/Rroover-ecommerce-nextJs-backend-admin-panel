import React from 'react';

const FormTitle = ({title, inputStatus, dataInfo}) => {
    return (
        <div className="bg-purple-600 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4 mb-0">
          <p>{inputStatus === 'productView' || inputStatus === 'productEdit' || inputStatus === 'productDelete' ? dataInfo.name : title}</p>
     </div>
    );
};

export default FormTitle;