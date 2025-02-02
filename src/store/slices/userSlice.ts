import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/IUser";

interface UserState {
    users: User[];
    selectedUser: User | null;
    total: number;
    skip: number;
    limit: number;
}

const initialState: UserState = {
    users: [],
    selectedUser: null,
    total: 0,
    skip: 0,
    limit: 30, // Количество пользователей на странице
};

// Запрос пользователей с пагинацией
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (skip: number) => {
        const response = await fetch(`https://dummyjson.com/users?limit=30&skip=${skip}`);
        return response.json();
    }
);

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        clearSelectedUser: (state) => {
            state.selectedUser = null;
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
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.users;
            state.total = action.payload.total;
        });
    },
});

export const { selectUser, clearSelectedUser, nextPage, prevPage } = userSlice.actions;
export default userSlice.reducer;
