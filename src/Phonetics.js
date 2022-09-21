import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from 'react-audio-player';
export default function Phonetics(props){
    if(props.phonetics.audio) {
    return (
        <div className="Phonetic">
 <ReactAudioPlayer src={props.phonetics.audio}
  controls
/>
<p className="PhoneticText">{props.phonetics.text}</p>
        </div>
    )}
    else{
        return null
    }
}