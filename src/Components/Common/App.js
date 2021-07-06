import "./App.css";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import Steps from "../Steps/Steps";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="App">
            <Title />
            <Ingredients />
            <Steps />
            <Footer />
        </div>
    );
}

export default App;
