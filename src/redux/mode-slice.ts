import { createSlice } from "@reduxjs/toolkit";

export type Mode = "dark" | "light";

type ModeState = {
    mode: Mode
};

const initialState: ModeState = {
    mode: "dark"
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
        }
    }
});

export const {setMode} = modeSlice.actions;