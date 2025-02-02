import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.ts";
import recipeReducer from "./slices/recipeSlice.ts";

export const store = configureStore({
    reducer: {
        users: userReducer,
        recipes: recipeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;