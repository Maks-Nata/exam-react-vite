import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRecipe } from "../../models/types.ts";

interface RecipeState {
    recipes: IRecipe[];
    selectedRecipe: IRecipe | null;
    total: number;
    skip: number;
    limit: number;
}

const initialState: RecipeState = {
    recipes: [],
    selectedRecipe: null,
    total: 0,
    skip: 0,
    limit: 30, // Количество рецептов на странице
};

// Запрос рецептов с пагинацией
export const fetchRecipes = createAsyncThunk(
    "recipes/fetchRecipes",
    async (skip: number) => {
        const response = await fetch(`https://dummyjson.com/recipes?limit=30&skip=${skip}`);
        return response.json();
    }
);

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        selectRecipe: (state, action) => {
            state.selectedRecipe = action.payload;
        },
        clearSelectedRecipe: (state) => {
            state.selectedRecipe = null;
        },
        nextPage: (state) => {
            if (state.skip + state.limit < state.total) {
                state.skip += state.limit;
            }
        },
        prevPage: (state) => {
            if (state.skip - state.limit >= 0) {
                state.skip -= state.limit;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes;
            state.total = action.payload.total;
        });
    },
});

export const { selectRecipe, clearSelectedRecipe, nextPage, prevPage } = recipeSlice.actions;
export default recipeSlice.reducer;