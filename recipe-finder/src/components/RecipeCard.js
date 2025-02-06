import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/recipeSlice';

function RecipeCard({ recipe }) {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
            <button onClick={() => dispatch(addToFavorites(recipe))}>Add to Favorites</button>
        </div>
    );
}

export default RecipeCard;
