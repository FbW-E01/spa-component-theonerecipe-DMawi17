import ReactDOM from "react-dom";
import Menu from "./Components/Menu";
import data from "./Data/Recipes/recipe.json";

ReactDOM.render(<Menu recipe={data} />, document.getElementById("root"));
