// import React from 'react';
import Ingredients from "./Ingredients";

const IngredientsList = ({ list, title }) => {
    return (
        <ul className="ingredients">
            <h3>{title}</h3>
            {list.map((ingredient, i) => (
                <Ingredients key={i} {...ingredient} />
            ))}
        </ul>
    );
};

export default IngredientsList;
