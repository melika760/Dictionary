import React from "react";
export default function Phonetics(props){
    if(props.phonetics.audio) {
    return (
        <div className="Phonetic">
            <a href={props.phonetics.audio} target="_blank" rel="noreferrer">Listen</a>
            <p className="PhoneticText">{props.phonetics.text}</p>
        </div>
    )}
    else{
        return null
    }
}