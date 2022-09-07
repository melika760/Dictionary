import React from "react";
export default function Synonym(props){
    if(props.synonyms){
        return(
            <div className="Synonyms">
                <ul>
                    {props.synonyms.map(function(synonym,index){
                        return (
                            <li key={index}>{synonym}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else{return null}
    
}