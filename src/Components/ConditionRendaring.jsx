import React, { useState } from 'react';

const ConditionRendaring = () => {
    const use = 10;
    const we = true;
    if (we === !true) {
        console.log('true')
    }
    else {
        console.log('not a true')
    }




    return (
        <div>
            <h2>Wee are conditonal reandaring {we} </h2>
        </div>
    );
};

export default ConditionRendaring;