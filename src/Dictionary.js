import React,{useState}from 'react';
import axios from 'axios';
export default function Dictionary(){
const[keyword,Setkeyword]= useState('')
function handlesubmit(event){
event.preventDefault();
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse)
}
function handleResponse(response){
    console.log(response.data)
}
function Changkeyword(event){
    Setkeyword(event.target.value)
}
    return(
        <div className='dictionary container'>
            <h1 >Dictionary</h1>
            <form onSubmit={handlesubmit}>
                <input type="search" autoFocus={true} onChange={Changkeyword}/>
                <input type="submit" className='btn btn-primary'/>
            </form>
            
        </div>
    )
}