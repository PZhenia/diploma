import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_BASE_URL;
const GET_HOTELS_URL = import.meta.env.VITE_GET_HOTELS;

export const getHotels = createAsyncThunk(
    "hotels/getHotels",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}${GET_HOTELS_URL}`);

            if (!res.ok) {
                throw new Error("Failed to fetch hotels!");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);