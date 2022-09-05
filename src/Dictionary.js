import React,{useState}from 'react';
export default function Dictionary(){
const[keyword,Setkeyword]= useState('')
function handlesubmit(event){
event.preventDefault();
alert(`Searchinhg for ${keyword}`)
}
function Changkeyword(event){
    Setkeyword(event.target.value)
}
    return(
        <div className='dictionary container'>
            <h1 className='text-center'>Dictionary</h1>
            <form className='text-center'onSubmit={handlesubmit}>
                <input type="search" autoFocus={true} onChange={Changkeyword}/>
                <input type="submit" className='btn btn-primary'/>
            </form>
            
        </div>
    )
}