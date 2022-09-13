import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics.js";
import"./Results.css"
export default function Results(props){
    if(props.results){return(
        <div className="Results">
            <section>
        <h4 className="WordName">{props.results.word}</h4>
        {props.results.phonetics.map(function(phonetic,index){
            return(<div key={index}>
                 <Phonetics phonetics={phonetic}/>
                 </div>)
        })}</section>
       {props.results.meanings.map(function(meaning,index){
        return (
            <section key={index}>
            <Meaning meaning={meaning}/></section>
        )
       })}
       
        </div>
    )}else{return null}

}