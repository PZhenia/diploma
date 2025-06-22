import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_BASE_URL;
const SIGN_IN_URL = import.meta.env.VITE_SIGN_IN;
const SIGN_UP_URL = import.meta.env.VITE_SIGN_UP;

export const signIn = createAsyncThunk(
    "auth/sign-in",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}${SIGN_IN_URL}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
            });

            if(!res.ok) {
                throw new Error(res.message);
            }

            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data));

            return data;
        } catch(e) {
            return rejectWithValue(e.message);
        }
    }
);

export const signUp = createAsyncThunk(
    "auth/sign-up",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}${SIGN_UP_URL}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ name, email, password })
            });

            if(!res.ok) {
                throw new Error(res.message);
            }

            return await res.json();
        } catch(e) {
            return rejectWithValue(e.message);
        }
    }
);