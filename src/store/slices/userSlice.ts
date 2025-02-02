import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/IUser.ts";

type UserSliceType = {
    users: User[];
};

const initialState: UserSliceType = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;