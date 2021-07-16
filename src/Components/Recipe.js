import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import "../scss/style.scss";

const Recipe = ({ name, ingredients, steps }) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h2>{name}</h2>
            <IngredientsList list={ingredients} />
            <Instructions title="Instructions" steps={steps} />
        </section>
    );
};

export default Recipe;
