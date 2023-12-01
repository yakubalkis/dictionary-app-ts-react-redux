export type API_DATA = [{
    license: {
        name: string;
        url: string;
    };
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
    phonetic: string | undefined;
    phonetics: [{
        text: string;
        audio: string | undefined;
        license: string | undefined;
        sourceUrl: string | undefined;
    }];
    sourceUrls: string[];
    word: string;
}]