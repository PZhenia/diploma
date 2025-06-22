import { configureStore } from "@reduxjs/toolkit";

import hotelsReducer from "./slices/hotelsSlice.js";
import destinationsReducer from "./slices/destisnationsSlice.js";
import authReducer from "./slices/authSlice.js";

export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        destinations: destinationsReducer,
        auth: authReducer,
    }
})