import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.uri} recipe={recipe} />
            ))}
        </div>
    );
}

export default RecipeList;
