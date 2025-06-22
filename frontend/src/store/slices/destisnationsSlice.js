import { createSlice } from "@reduxjs/toolkit";

import { getDestinations } from "../thunks/destinationsThunk.js";

const destinationsSlice = createSlice({
    name: "destinations",
    initialState: {
        destinations: [],
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getDestinations.pending, state => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getDestinations.fulfilled, (state, action) => {
                state.destinations = action.payload;
                state.loading = false;
            })
            .addCase(getDestinations.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

export default destinationsSlice.reducer;