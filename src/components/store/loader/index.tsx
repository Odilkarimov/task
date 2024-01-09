import { createSlice } from "@reduxjs/toolkit";

interface LoaderType {
  isloading: boolean;
}

const initialState: LoaderType = {
    isloading: false,
}

const loaderSlice = createSlice({
    initialState,
    name: "loader",
    reducers: {
        startLoading: (state, action) => {
            state.isloading = action.payload;
        },
        endLoading: (state, action) => {
            state.isloading = action.payload;
        }
    }
})

export const {endLoading, startLoading} = loaderSlice.actions;
export default loaderSlice.reducer;
