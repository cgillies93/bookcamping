import React from 'react';

const PhoneNumber = ({ pn }) => (
    <>
        <p className="bold phone-type">{pn.num_type}</p>
        <p>{pn.number}</p>
    </>
)

export default PhoneNumber;
