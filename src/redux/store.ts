import { configureStore } from "@reduxjs/toolkit";
import { modeSlice } from "./mode-slice";
import { wordSlice } from "./word-slice";


export const store = configureStore({
    reducer: {
        mode: modeSlice.reducer,
        wordData: wordSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;