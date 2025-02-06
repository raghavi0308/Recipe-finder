import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/recipeSlice';
import RecipeList from '../components/RecipeList';

function Home() {
    const dispatch = useDispatch();
    const { recipes, status } = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <div>
            <h1>Recipe Finder</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Failed to fetch recipes.</p>}
            {status === 'succeeded' && <RecipeList recipes={recipes} />}
        </div>
    );
}

export default Home;
