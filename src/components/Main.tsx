import { useAppSelector } from "../redux/hooks"
import WordContent from "./WordContent";


export default function Main() {

    const wordData = useAppSelector(state => state.wordData.data);

    const wordContent = wordData.meanings.map((meaning) => {
        return (
            <WordContent 
                defininitions={meaning.definitions.map(def => def.definition)} 
                wordType={meaning.partOfSpeech} 
                synonyms={meaning.synonyms} 
                antonyms={meaning.antonyms} 
            />
        )
    })

    return(
        <div className="div-main">
            <main className="main">
            <div className="div-word-audio">
                <div className="div-word-phonetic">
                    <h2>{wordData.word}</h2>
                    <p>{wordData.phonetic}</p>
                </div>
                <audio controls src={wordData.audio}></audio>
            </div>
            {wordContent}
            <div className="div-source">
                <div className="div-line source-line"></div>
                <div className="source-elements">
                    <label>Source</label>
                    <a href={wordData.source} className="light-mode">{wordData.source}</a>
                </div>
            </div>
            </main>
        </div>
    )
}