import React, { useState } from 'react';
import RolePermissionInputModal from '../RolePermissionInputModal';

const RolePermissionCreateButton = ({buttonTitle, pageNumber, modalInputStatus}) => {
    const [modal, setModal] = useState(false);
    return (
        <>
             <button
            className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
            onClick={() => setModal(true)}
          >
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            {buttonTitle}
          </button>

          { 
            modalInputStatus === 'permissionAdd' || modalInputStatus === 'roleAdd' ? 
            <RolePermissionInputModal 
            modal={modal} 
            setModal={setModal} 
            inputStatus={modalInputStatus}
            pageNumber={pageNumber}
            /> : ''
        }
        </>
    );
};

export default RolePermissionCreateButton;