// import React from 'react';
const Ingredients = ({ name, amount, measurement }) => {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
};

export default Ingredients;
