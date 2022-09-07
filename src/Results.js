import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics.js";
export default function Results(props){
    if(props.results){return(
        <div className="Results">
        <h4>{props.results.word}</h4>
        {props.results.phonetics.map(function(phonetic,index){
            return(<div key={index}>
                 <Phonetics phonetics={phonetic}/>
                 </div>)
        })}
       {props.results.meanings.map(function(meaning,index){
        return (
            <div key={index}>
            <Meaning meaning={meaning}/></div>
        )
       })}
       
        </div>
    )}else{return null}

}