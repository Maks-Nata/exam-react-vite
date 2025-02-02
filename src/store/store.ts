import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import recipeReducer from "./slices/recipeSlice";

const store = configureStore({
    reducer: {
        users: userReducer,
        recipes: recipeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;