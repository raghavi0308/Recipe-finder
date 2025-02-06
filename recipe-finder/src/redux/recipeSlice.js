import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.edamam.com/search?q=pizza&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await axios.get(API_URL);
    return response.data.hits.map(hit => hit.recipe);
});

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: { recipes: [], favorites: [], status: 'idle' },
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(recipe => recipe.uri !== action.payload.uri);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state) => { state.status = 'failed'; });
    }
});

export const { addToFavorites, removeFromFavorites } = recipeSlice.actions;
export default recipeSlice.reducer;
