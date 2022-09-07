import React from "react";
export default function Synonym(props){
    console.log(props.synonym)
    if(props.synonym){
        return(
            <div className="Synonyms">
                <ul>
                    {props.synonym.map(function(synonym,index){
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