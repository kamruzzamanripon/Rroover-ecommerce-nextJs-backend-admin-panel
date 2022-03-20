import React, { useState } from 'react';
import RolePermissionCreateButton from './sort/RolePermissionCreateButton';

const RolePermissionComponentTitle = ({title, titleDescription, buttonTitle, buttonTwoTitle, pageNumber, modalInputStatus}) => {

    const [modal, setModal] = useState(false);
      
    
    return (
        <>
       
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">{title}</h1>
          <h2 className="text-gray-600 ml-0.5">{titleDescription}</h2>
        </div>
  
        <div className="flex flex-wrap items-start justify-end -mb-3">
         
            <RolePermissionCreateButton buttonTitle={buttonTwoTitle} pageNumber={pageNumber} modalInputStatus={modalInputStatus} />
            <RolePermissionCreateButton buttonTitle={buttonTitle} pageNumber={pageNumber} modalInputStatus={modalInputStatus} />
             

        
          
        </div>
      </>
    );
};

export default RolePermissionComponentTitle;