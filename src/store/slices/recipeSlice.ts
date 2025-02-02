import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../models/types.ts";

type RecipeSliceType = {
    recipes: IRecipe[];
};

const initialState: RecipeSliceType = {
    recipes: [],
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        setRecipes: (state, action: PayloadAction<IRecipe[]>) => {
            state.recipes = action.payload;
        },
    },
});

export const { setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;