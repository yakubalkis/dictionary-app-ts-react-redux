import { FormEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { WordDataItem, setWordData } from "../redux/word-slice";
import { fetchData } from "../util/http";
import {type API_DATA } from "../util/apiDataType";
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
import searchIcon from "../img/icons8-search-24.png";


export default function Input() {
    const modeType = useAppSelector(state => state.mode);
    const wordData = useAppSelector(state => state.wordData);
    const dispatch = useAppDispatch();
    const word = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const enteredWord = word.current!.value;

        async function fetchWordData() {
            try {
                const fetchedData : API_DATA = (await fetchData(BASE_URL+enteredWord)) as API_DATA;
                const data: WordDataItem = {
                    word: fetchedData[0]!.word,
                    phonetic: fetchedData[0]!.phonetics.find((pho) => {
                        return pho.audio !== '';
                        })?.text,
                    meanings: fetchedData[0]!.meanings,
                    source: fetchedData[0]!.sourceUrls[0],
                    audio: fetchedData[0]!.phonetics.find((pho) => {
                        return pho.audio !== '';
                        })?.audio,
                }
                dispatch(setWordData({data}))
            } catch (error) {
                console.log(error); 
            }
        }
        fetchWordData();
    }
    console.log(wordData);
    return(
        <form onSubmit={handleSubmit} className="div-input">
            <input className={`${modeType.mode}-modeForDivInput`} ref={word}/>
            <button className={`${modeType.mode}-modeForDivInput`}>
                <img alt="" src={searchIcon} />
            </button>
        </form>
    )
}