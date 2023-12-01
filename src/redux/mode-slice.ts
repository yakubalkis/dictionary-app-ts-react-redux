import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Mode = "dark" | "light";

type ModeState = {
    mode: Mode,
    error: boolean;
};

const initialState: ModeState = {
    mode: "dark",
    error: false
};

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        setMode(state) {
            if(state.mode === "dark") {
                state.mode = "light";
            } else {
                state.mode = "dark";
            }
        },
        setError(state, action: PayloadAction<boolean>) {
            state.error = action.payload;
        }
    }
});

export const {setMode, setError} = modeSlice.actions;