import React from 'react';

const InputHeadingTitle = ({title}) => {
    return (
        <>
            <hr className="bg-gradient-to-r from-purple-500 via-purple-500 to-white-500 h-1 m-0"/>     
            <p className="text-center text-xl font-semibold bg-lime-500 product-title">{title}</p>
        </>
    );
};

export default InputHeadingTitle;