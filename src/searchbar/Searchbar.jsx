import { useState } from 'react';
import'./searchBar.scss';
const types=["buy","rent"];
function SearchBar(){
    const[query,setQuery]=useState({
        type:"buy",
        location:"",
        MinPrice:0,
        MaxPrice:0,
    });
    const switchType =(val)=>{
        setQuery((prev=>({...prev,type:val})));
    };
    return(
        <div className='searchBar'>
            <div className='type'>
            {types.map((type)=>(
            <button 
            key={type}
             onClick={()=>switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>))}
           
        </div>
<form>
    <input type='text' name='location' placeholder='City Location'/>

    <input type='number' 
    name='MinPrice'
     min={0} max={10000000} placeholder='Min Price '/>

    <input type='number' name='MaxPrice'
     min={0}
     max={10000000} placeholder='Max Price'/>
    <button >
        <img src='/search.png'/>
        </button>
</form>
        </div>
    )
}
export default SearchBar;