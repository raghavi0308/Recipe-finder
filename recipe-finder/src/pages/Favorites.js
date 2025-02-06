import React from 'react';
import { useSelector } from 'react-redux';
import RecipeList from '../components/RecipeList';

function Favorites() {
    const favorites = useSelector(state => state.recipes.favorites);

    return (
        <div>
            <h1>Favorite Recipes</h1>
            {favorites.length === 0 ? <p>No favorites yet.</p> : <RecipeList recipes={favorites} />}
        </div>
    );
}

export default Favorites;
