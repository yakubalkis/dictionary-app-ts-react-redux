import { FormEvent,type ReactNode, useRef, useState } from "react";
import searchIcon from "../img/icons8-search-24.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchData } from "../util/http";
import ErrorMessage from "./ErrorMessage";
import { WordDataItem, setWordData } from "../redux/word-slice";
import {type API_DATA } from "../util/apiDataType";
import { setError } from "../redux/mode-slice";
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";


export default function Input() {
    const modeType = useAppSelector(state => state.mode);
    const wordData = useAppSelector(state => state.wordData);
    const error = useAppSelector(state => state.mode.error);
    const dispatch = useAppDispatch();
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const word = useRef<HTMLInputElement>(null);
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const enteredWord = word.current!.value;

        async function fetchWordData() {
            setIsFetching(true);
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
                dispatch(setError(false));
            } catch (error) {
                if(error instanceof Error) {
                    setErrorMessage(error.message);
                    dispatch(setError(true));
                }
            }
            setIsFetching(false);
        }
        
        fetchWordData();
    }

    let content: ReactNode;
    if(error) {
        content = <ErrorMessage text={errorMessage} />;
    }
    if(isFetching) {
        content = <p id="loading-fallback">Fetching process...</p>;
      }
    
    return(
        <>
        <form onSubmit={handleSubmit} className="div-input">
            <input className={`${modeType.mode}-modeForDivInput`} placeholder="Please enter a word..." ref={word}/>
            <button className={`${modeType.mode}-modeForDivInput`}>
                <img alt="" src={searchIcon} />
            </button>
        </form>
        <div className="message-div">
            {content}
        </div>
        </>
    )
}