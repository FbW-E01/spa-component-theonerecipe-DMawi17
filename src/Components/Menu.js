// import React from 'react';
import Recipe from "./Recipe";
import '../Scss/style.scss';

const Menu = ({ recipe }) => {
    return (
        <article id="wrapper">
            <header id="header">
                <h1>Delicious Recipes</h1>
            </header>
            <main id="main">
                <div className="menu">
                    {recipe.map((recipe, i) => {
                        return <Recipe key={i} {...recipe} />;
                    })}
                </div>
            </main>
            <footer id="footer">
                <h3> from “My Street Food Kitchen”, By: JENNIFER JOYCE</h3>
            </footer>
        </article>
    );
};

export default Menu;
