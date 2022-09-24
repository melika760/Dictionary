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
let pexelapikey="563492ad6f917000010000015e6065960f104440a06b84db97539db5"
let pexelapiurl =  `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`
let header = `Authorization: Bearer ${pexelapikey}`;
 axios.get(pexelapiurl, { headers: { header } }).then(handleimageResponse);
}
function handleimageResponse(response){
    console.log(response.data)
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
            <div className='col-lg-11'>
            <input className='Searchinput' type="search" autoFocus={true} onChange={Changkeyword}/></div>
            <div className='col-lg-1 text-center'>
            <button className=' btn btn-color ml-0 '>Search</button>
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