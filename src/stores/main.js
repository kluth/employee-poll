import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        password: "",
        isLoggedIn: false
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.name = "";
            state.email = "";
            state.password = "";
            state.isLoggedIn = false;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
}
);

export const { setUser, logout, setPassword, setEmail, setName, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
