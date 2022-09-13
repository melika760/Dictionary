import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props){
    return (
        <div className="MeaningWords">
            <h5 className="WordName">{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function(definition,index){
                return(
                    <div className="difineWords" key={index}>
                        <strong><p>{definition.definition}</p></strong>
                        <em><p>{definition.example}</p></em>
                        <Synonyms synonyms={definition.synonyms} /> </div>
                    
                )
            })}
        </div>
    )
}