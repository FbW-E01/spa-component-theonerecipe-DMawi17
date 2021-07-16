import ReactDOM from "react-dom";
import Menu from "./Components/Menu";
import data from "./data/Recipes/recipe.json";

ReactDOM.render(<Menu recipe={data} />, document.getElementById("root"));
