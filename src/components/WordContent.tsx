
type WordPropType = {
    wordType: string;
    defininitions: string[];
    synonyms: string[];
    antonyms: string[];
};

export default function WordContent(props: WordPropType) {

    const definitions = props.defininitions.map((def) => {
        return <li>{def}</li>
    })
    

    return(
        <div className="div-content">
            <div className="word-type-part">
                <p>{props.wordType}</p>
                <div className="div-line"></div>
            </div>
            <div className="div-meanings">
                <p>Meaning</p>
                <div className="div-definitions">
                    <ul>
                        {definitions}
                    </ul>
                </div>
                <div className="div-synonyms_antonyms">
                    {props.synonyms.length > 0 && <p><label>Synonyms:</label> {props.synonyms}</p>}
                    {props.antonyms.length > 0 && <p><label>Antonyms:</label>: {props.antonyms}</p>}
                </div>
            </div>
        </div>
    )
}