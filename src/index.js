import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes/recipe.json";

ReactDOM.render(<Menu recipe={data} />, document.getElementById("root"));
