import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type WordDataItem = {
    word: string;
    phonetic: string | undefined;
    meanings: [
        {
            partOfSpeech: string;
            definitions: [{
                antonyms: string[];
                definition: string;
                synonyms: string[];
            }];
            synonyms: string[];
            antonyms: string[];
        }
    ];
    source: string;
    audio: string | undefined;
}

export type WordDataState = {
    data: WordDataItem;
}

const initialState: WordDataState = {
    data: {
        word: "",
        phonetic: "",
        meanings: [
            {
                partOfSpeech: "",
                definitions: [{
                    antonyms: [],
                    definition: "",
                    synonyms: [],
                }],
                synonyms: [],
                antonyms: []
            }
        ],
        source: "",
        audio: ""
    }
};

export const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
            setWordData(state, action: PayloadAction<WordDataState>) {
                state.data = action.payload.data;
            }
        },
    }
);

export const {setWordData} = wordSlice.actions;