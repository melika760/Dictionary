import React from "react";
export default function Meaning(props){
    return (
        <div className="MeaningWords">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function(definition,index){
                return(
                    <div className="difineWords" key={index}>
                        <p>{definition.definition}</p>
                        <p>Example:{definition.example}</p></div>
                    
                )
            })}
        </div>
    )
}