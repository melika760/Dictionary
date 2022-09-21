import React,{useState}from 'react';
import axios from 'axios';
import Results from './Results';
import "./Dictionary.css";
export default function Dictionary(props){
const[keyword,Setkeyword]= useState(props.defaultKeyword)
const[result,Setresult]=useState(null)
const[loaded,Setloaded]=useState(false)
function search(){
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse)
}
function handlesubmit(event){
event.preventDefault();
search()
}
function load(){
    Setloaded(true);
    search()
}
function handleResponse(response){
    Setresult(response.data[0])
}
function Changkeyword(event){
    Setkeyword(event.target.value)
}
if(loaded){   return(
    <div className='Dictionary container'>
        <h1 className='text-center title' >Dictionary</h1>
        <section>
        <form onSubmit={handlesubmit}>
            <div className='row'>
            <div className='col-10'>
            <input className='Searchinput' type="search" autoFocus={true} onChange={Changkeyword}/></div>
            <div className='col-2'>
            <button className=' btn btn-color'>Search</button>
            </div>
            </div>
        </form>
        </section>
        <Results results={result}/>
    </div>
)}else{
    load()
}
 
}