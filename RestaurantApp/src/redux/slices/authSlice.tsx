import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoading: false,
        user: {}
    },
    reducers: {
        register: (state, action) => {
            state.isLoading = true;
        },
        login: (state, action) => {
            state.isLoading = true;
        },
        user: (state, action) => {
            state.user = action.payload;
        }
    }

});

export const register = authSlice.actions.register;
export const login = authSlice.actions.login;
export const getUser = authSlice.actions.user;

export default authSlice.reducer;