import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props){
    return (
        <div className="MeaningWords">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function(definition,index){
                return(
                    <div className="difineWords" key={index}>
                        <p>{definition.definition}</p>
                        <strong>Example:</strong>
                        <p>{definition.example}</p>
                        <Synonyms synonyms={definition.synonyms} /> </div>
                    
                )
            })}
        </div>
    )
}