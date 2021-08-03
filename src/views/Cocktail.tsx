import React from 'react';
import CocktailBox from '../components/CocktailBox';

const Cocktail: React.FC = () => {
    

    return (
        <section>
           <h2 data-testid='CocktailId'>Cocktail View</h2>
           <CocktailBox />
           <CocktailBox />
           <CocktailBox />
        </section>
    )
}

export default Cocktail;